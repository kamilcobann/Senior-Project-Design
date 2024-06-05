import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Project } from 'src/app/models/Project';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-protrack-add-kanban-dialog',
  templateUrl: './protrack-add-kanban-dialog.component.html',
  styleUrls: ['./protrack-add-kanban-dialog.component.scss']
})
export class ProtrackAddKanbanDialogComponent implements OnInit{



  @Output() kanbanAdded: EventEmitter<void> = new EventEmitter<void>();


  kanbanForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ProtrackAddKanbanDialogComponent>,
    private kanbanService: ProtrackKanbanService,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project},
    private fb: FormBuilder,


  ) {}


  ngOnInit(): void {
    this.kanbanForm = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(100)]]
    })
  }

  addKanban() {
    console.log(this.kanbanForm.value);

    this.kanbanService.addKanban(this.data.project.id!,this.kanbanForm.value).subscribe(res => {
      this.kanbanAdded.emit();
      this.dialogRef.close();
    });

  }
}
