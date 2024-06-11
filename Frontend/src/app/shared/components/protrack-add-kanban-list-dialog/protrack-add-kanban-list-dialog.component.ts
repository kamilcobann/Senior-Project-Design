import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Project } from 'src/app/models/Project';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProtrackKanbanListService } from 'src/app/services/protrack-kanban-list.service';
import { Kanban } from 'src/app/models/Kanban';

@Component({
  selector: 'app-protrack-add-kanban-list-dialog',
  templateUrl: './protrack-add-kanban-list-dialog.component.html',
  styleUrls: ['./protrack-add-kanban-list-dialog.component.scss']
})
export class ProtrackAddKanbanListDialogComponent {



  @Output() listAdded: EventEmitter<void> = new EventEmitter<void>();


  listForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ProtrackAddKanbanListDialogComponent>,
    private kanbanListService: ProtrackKanbanListService,
    @Inject(MAT_DIALOG_DATA) public data: { kanban: Kanban},
    private fb: FormBuilder,


  ) {}


  ngOnInit(): void {
    this.listForm = this.fb.group({
      title:['',[Validators.required,Validators.maxLength(100)]]
    })
  }

  addKanbanList() {
    console.log(this.listForm.value);

    this.kanbanListService.createKanbanList(this.data.kanban.id!,this.listForm.value).subscribe(res => {
      this.listAdded.emit();
      this.dialogRef.close();
    });

  }
}
