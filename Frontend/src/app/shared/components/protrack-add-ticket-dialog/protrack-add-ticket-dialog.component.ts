import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
import { KanbanList } from 'src/app/models/KanbanList';

@Component({
  selector: 'app-protrack-add-ticket-dialog',
  templateUrl: './protrack-add-ticket-dialog.component.html',
  styleUrls: ['./protrack-add-ticket-dialog.component.scss']
})
export class ProtrackAddTicketDialogComponent {


  ticketForm!: FormGroup
  updated_at!: String
  @Output() ticketAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProtrackAddTicketDialogComponent>,
    private commentService: ProtrackCommentService,
    private ticketService: ProtrackTicketService,
    @Inject(MAT_DIALOG_DATA) public data: { kanbanList: KanbanList },
  ) { }

  ngOnInit(): void {



    this.ticketForm = this.fb.group({
      title:['',[Validators.required]],
      description: ['', [Validators.required]]
    })

  }

  createTicket(){
    this.ticketService.createTicket(this.data.kanbanList.id!,this.ticketForm.value).subscribe(res=>{
      this.ticketAdded.emit()
      this.dialogRef.close();
    })
  }
}
