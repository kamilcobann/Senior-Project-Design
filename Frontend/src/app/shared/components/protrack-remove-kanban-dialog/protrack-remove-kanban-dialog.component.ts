import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Kanban } from 'src/app/models/Kanban';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Project } from 'src/app/models/Project';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-protrack-remove-kanban-dialog',
  templateUrl: './protrack-remove-kanban-dialog.component.html',
  styleUrls: ['./protrack-remove-kanban-dialog.component.scss']
})
export class ProtrackRemoveKanbanDialogComponent implements OnInit {
  // @Input() kanban!: Kanban;
  // @Input() project!: Project;

  @Output() kanbanDeleted: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {

  }

  constructor(
    public dialogRef: MatDialogRef<ProtrackRemoveKanbanDialogComponent>,
    private kanbanService: ProtrackKanbanService,
    @Inject(MAT_DIALOG_DATA) public data: {kanban: Kanban, project: Project}

  ) {}

  deleteKanban(id: String) {
    console.log(id, "id");
    console.log(this.data.kanban, "kanban")
    this.kanbanService.deleteKanbanById(id).subscribe(res => {
      // Emit the event to notify the parent component
      this.kanbanDeleted.emit();

      // Optionally close the dialog
      this.dialogRef.close();
    });
  }
}
