import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  CdkDragHandle,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { ActivatedRoute } from '@angular/router';
import { Kanban } from 'src/app/models/Kanban';
import { Ticket } from 'src/app/models/Ticket';
import { ProtrackTicketService } from 'src/app/services/protrack-ticket.service';
import { ProtrackTicketInfoDialogComponent } from 'src/app/shared/components/protrack-ticket-info-dialog/protrack-ticket-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProtrackAddKanbanListDialogComponent } from 'src/app/shared/components/protrack-add-kanban-list-dialog/protrack-add-kanban-list-dialog.component';
import { ProtrackAddTicketDialogComponent } from 'src/app/shared/components/protrack-add-ticket-dialog/protrack-add-ticket-dialog.component';
import { KanbanList } from 'src/app/models/KanbanList';
import { User } from 'src/app/models/User';
import { ProtrackAddMemberToKanbanDialogComponent } from 'src/app/shared/components/protrack-add-member-to-kanban-dialog/protrack-add-member-to-kanban-dialog.component';

@Component({
  selector: 'app-protrack-kanban-details',
  templateUrl: './protrack-kanban-details.component.html',
  styleUrls: ['./protrack-kanban-details.component.scss'],
})
export class ProtrackKanbanDetailsComponent implements OnInit {

  isMouseOver!: boolean[];
  kanbanId!: String
  kanban!: Kanban
  constructor(
    private kanbanService: ProtrackKanbanService,
    private route: ActivatedRoute,
    private ticketService: ProtrackTicketService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.kanbanId = String(this.route.snapshot.paramMap.get('kanbanId'))
    this.kanbanService.getKanbanById(this.kanbanId).subscribe(res => {
      this.kanban = res.kanban
      this.isMouseOver = new Array(this.kanban.members!.length).fill(false);
    })
  }

  openTicketInfoDialog(enterAnimationDuration: string, exitAnimationDuration: string, ticket: Ticket,kanban:Kanban): void {
    const dialogRef = this.dialog.open(ProtrackTicketInfoDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { ticket: ticket, kanban:kanban}
    });

    dialogRef.componentInstance.ticketUpdated.subscribe(() => {
      this.refreshKanban()
    });
  }

  openAddMemberToKanbanDialog(enterAnimationDuration: string, exitAnimationDuration: string, kanban:Kanban): void {
    const dialogRef = this.dialog.open(ProtrackAddMemberToKanbanDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {  kanban:kanban}
    });

    dialogRef.componentInstance.memberAddedToKanban.subscribe(() => {
      this.refreshKanban()
    });
  }

  openAddListDialog(enterAnimationDuration: string, exitAnimationDuration: string, kanban: Kanban): void {
    const dialogRef = this.dialog.open(ProtrackAddKanbanListDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { kanban: kanban }
    });

    dialogRef.componentInstance.listAdded.subscribe(() => {
      this.refreshKanban()
    });
  }

  openCreateTicketDialog(enterAnimationDuration: string, exitAnimationDuration: string, kanbanList: KanbanList): void {
    const dialogRef = this.dialog.open(ProtrackAddTicketDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { kanbanList:  kanbanList}
    });

    dialogRef.componentInstance.ticketAdded.subscribe(() => {
      this.refreshKanban()
    });
  }


  refreshKanban() {
    this.kanbanService.getKanbanById(this.kanban.id!).subscribe(res => {
      this.kanban = res.kanban;
    });
  }

  drop(event: CdkDragDrop<Ticket[]>,id:any) {
    if (event.previousContainer === event.container) {

      event.container.data[event.previousIndex].by_kanban_list_id = id
      this.ticketService.updateTicket(event.container.data[event.previousIndex].id!, event.container.data[event.previousIndex]).subscribe(res => {
        console.log('Moved item:', event.container.data[event.previousIndex]);
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      })
    } else {
      console.log(event.container.id);

      event.previousContainer.data[event.previousIndex].by_kanban_list_id = id
      this.ticketService.updateTicket( event.previousContainer.data[event.previousIndex].id!,  event.previousContainer.data[event.previousIndex]).subscribe(res => {
        console.log('Transferred item:', event.previousContainer.data[event.previousIndex]);
        // Move item between different lists
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
        console.log(res);

      })

    }
  }

  onMouseEnter(index: number) {
    this.isMouseOver[index] = true;
  }

  onMouseLeave(index: number) {
    this.isMouseOver[index] = false;
  }
  removeMemberFromKanban(member:User){
    this.kanbanService.removeMemberFromKanban(this.kanban.id!,Number(member.id)).subscribe(res=>{
      this.refreshKanban()
    })
  }

}
