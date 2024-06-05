import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/Project';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';

@Component({
  selector: 'app-protrack-add-user-to-project-dialog',
  templateUrl: './protrack-add-user-to-project-dialog.component.html',
  styleUrls: ['./protrack-add-user-to-project-dialog.component.scss']
})
export class ProtrackAddUserToProjectDialogComponent implements OnInit{

  @Output() memberAdded: EventEmitter<void> = new EventEmitter<void>();

  users!:[User]
  constructor(
    private authService: AuthService,
    private projectService: ProtrackProjectService,
    public dialogRef: MatDialogRef<ProtrackAddUserToProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project},
    private fb: FormBuilder,
  )
  {
  }

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe(res => {
      this.users = res.users;
    })
  }

  addMember(userId: String){
    console.log(userId);

    this.projectService.addMemberToProject(this.data.project.id!,userId).subscribe(res => {
      this.memberAdded.emit();
      this.dialogRef.close();
    })
  }
}
