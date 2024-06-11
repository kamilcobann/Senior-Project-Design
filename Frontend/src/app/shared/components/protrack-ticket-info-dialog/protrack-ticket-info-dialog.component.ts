import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Project } from 'src/app/models/Project';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/models/Ticket';
import { ProtrackTicketService } from 'src/app/services/protrack-ticket.service';
import { ProtrackCommentService } from 'src/app/services/protrack-comment.service';
import { Comment } from 'src/app/models/Comment';
import { Analysis } from 'src/app/models/Analysis';
import { Kanban } from 'src/app/models/Kanban';
import { User } from 'src/app/models/User';
import { ProtrackAddMemberToTicketDialogComponent } from '../protrack-add-member-to-ticket-dialog/protrack-add-member-to-ticket-dialog.component';

@Component({
  selector: 'app-protrack-ticket-info-dialog',
  templateUrl: './protrack-ticket-info-dialog.component.html',
  styleUrls: ['./protrack-ticket-info-dialog.component.scss']
})
export class ProtrackTicketInfoDialogComponent implements OnInit {
  isMouseOver!: boolean[];
  ticket!: Ticket;
  commentForm!: FormGroup
  ticketForm!: FormGroup
  updated_at!: String
  response!: { comment: Comment, analysis: Analysis }[];
  @Output() ticketUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProtrackTicketInfoDialogComponent>,
    public dialog: MatDialog,
    private commentService: ProtrackCommentService,
    private ticketService: ProtrackTicketService,
    @Inject(MAT_DIALOG_DATA) public data: {
      ticket: Ticket, kanban: Kanban

    },
  ) { }

  ngOnInit(): void {

    this.commentForm = this.fb.group({
      content: ['', [Validators.required]]
    })


    this.ticketForm = this.fb.group({
      description: [this.data.ticket.description, [Validators.required]]
    })

    this.ticketService.getTicketById(this.data.ticket.id!).subscribe(res => {
      this.ticket = res.ticket[0]

      this.isMouseOver = new Array(this.ticket.assigned_users!.length).fill(false);
    })

    this.commentService.getAllCommentsOfTicket(this.data.ticket.id!).subscribe(res => {
      this.response = res.comments
      console.log(this.calculatePositivity());

    })



  }

  openAddMemberToTicketDialog(enterAnimationDuration: string, exitAnimationDuration: string, kanban: Kanban, ticket: Ticket): void {
    const dialogRef = this.dialog.open(ProtrackAddMemberToTicketDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { ticket: ticket, kanban: kanban }
    });

    dialogRef.componentInstance.memberAddedToTicket.subscribe(() => {
      this.ticketService.getTicketById(this.data.ticket.id!).subscribe(res => {
        this.ticket.assigned_users = res.ticket[0].assigned_users
      })
    });
  }

  sendComment() {
    this.commentService.createComment(this.data.ticket.id!, this.commentForm.value).subscribe(res => {
      console.log(res);
      this.commentForm.reset()
      this.commentService.getAllCommentsOfTicket(this.data.ticket.id!).subscribe(res => {
        this.response = res.comments
      })
    })
  }

  calculatePositivity() {
    let compund: number = 0
    this.response.forEach(element => {
      compund += element.analysis.compound!
    });

    return compund
  }
  updateTicket() {
    const updated_ticket = {
      title: this.data.ticket.title,
      description: this.ticketForm.value['description'],
      by_kanban_list_id: this.data.ticket.by_kanban_list_id
    }
    this.ticketService.updateTicket(this.data.ticket.id!, updated_ticket).subscribe(res => {
      this.ticketUpdated.emit();
    })
  }

  onMouseEnter(index: number) {
    this.isMouseOver[index] = true;
  }

  onMouseLeave(index: number) {
    this.isMouseOver[index] = false;
  }
  removeMemberFromTicket(member: User) {
    this.ticketService.removeUserFromTicket(this.ticket.id!, member.id!).subscribe(res => {
      this.ticketService.getTicketById(this.data.ticket.id!).subscribe(res => {
        this.ticket.assigned_users = res.ticket[0].assigned_users
      })
    })
  }

}
