import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/Project';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Kanban } from 'src/app/models/Kanban';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';
import { ProtrackTicketService } from 'src/app/services/protrack-ticket.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-protrack-add-member-to-ticket-dialog',
  templateUrl: './protrack-add-member-to-ticket-dialog.component.html',
  styleUrls: ['./protrack-add-member-to-ticket-dialog.component.scss']
})
export class ProtrackAddMemberToTicketDialogComponent {

  @Output() memberAddedToTicket: EventEmitter<void> = new EventEmitter<void>();

  users!: [User]
  constructor(
    private kanbanService: ProtrackKanbanService,
    private ticketService: ProtrackTicketService,
    public dialogRef: MatDialogRef<ProtrackAddMemberToTicketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { kanban: Kanban,ticket:Ticket },
  ) {
  }

  ngOnInit(): void {
    // this.ticketService.getTicketById(String(this.data.kanban.by_project_id)).subscribe(res => {
    //   this.users = res.project.members;
    // })
    this.users = this.data.kanban.members!
  }

  addMember(userId: String) {
    console.log(userId);

    this.ticketService.addUserToTicket(this.data.ticket.id!, (userId)).subscribe(res => {
      this.memberAddedToTicket.emit();
      if (res.status ){
        this.dialogRef.close();
      }
    })
  }
}
