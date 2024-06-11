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

@Component({
  selector: 'app-protrack-add-member-to-kanban-dialog',
  templateUrl: './protrack-add-member-to-kanban-dialog.component.html',
  styleUrls: ['./protrack-add-member-to-kanban-dialog.component.scss']
})
export class ProtrackAddMemberToKanbanDialogComponent {

  @Output() memberAddedToKanban: EventEmitter<void> = new EventEmitter<void>();

  users!: [User]
  constructor(
    private kanbanService: ProtrackKanbanService,
    private projectService: ProtrackProjectService,
    public dialogRef: MatDialogRef<ProtrackAddMemberToKanbanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { kanban: Kanban },
  ) {
  }

  ngOnInit(): void {
    this.projectService.getProjectById(String(this.data.kanban.by_project_id)).subscribe(res => {
      this.users = res.project.members;
    })
  }

  addMember(userId: String) {
    console.log(userId);

    this.kanbanService.addMemberToKanban(this.data.kanban.id!, Number(userId)).subscribe(res => {
      this.memberAddedToKanban.emit();
      this.dialogRef.close();
    })
  }
}
