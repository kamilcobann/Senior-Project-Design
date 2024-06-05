import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Project } from 'src/app/models/Project';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-protrack-edit-project-dialog',
  templateUrl: './protrack-edit-project-dialog.component.html',
  styleUrls: ['./protrack-edit-project-dialog.component.scss']
})
export class ProtrackEditProjectDialogComponent implements OnInit{

  @Output() projectEdited: EventEmitter<void> = new EventEmitter<void>();


  projectForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ProtrackEditProjectDialogComponent>,
    private projectService: ProtrackKanbanService,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project},
    private fb: FormBuilder,


  ) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      title: [this.data.project.title,[Validators.required,Validators.maxLength(100)]],
      description: [this.data.project.description,[Validators.required,Validators.maxLength(255)]],
      start_date: [this.data.project.start_date,[Validators.required]],
      end_date: [this.data.project.end_date,[Validators.required]],
      is_active: [this.data.project.is_active]
    })

  console.log(this.data.project);

  }

  resetForm() {
    this.projectForm.setValue({
      title:this.data.project.title,
      description:this.data.project.description,
      start_date:this.data.project.start_date,
      end_date:this.data.project.end_date,
      is_active:this.data.project.is_active,
    })
  }
  updateProject(){
    this.projectService.editProject(this.data.project.id!, this.projectForm.value).subscribe(res => {
      this.projectEdited.emit();
      this.dialogRef.close();
    })
  }
}
