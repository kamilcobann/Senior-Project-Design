import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';
import { Project } from 'src/app/models/Project';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { Kanban } from 'src/app/models/Kanban';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProtrackRemoveKanbanDialogComponent } from 'src/app/shared/components/protrack-remove-kanban-dialog/protrack-remove-kanban-dialog.component';
import { ProtrackAddKanbanDialogComponent } from 'src/app/shared/components/protrack-add-kanban-dialog/protrack-add-kanban-dialog.component';
import { ProtrackAddUserToProjectDialogComponent } from 'src/app/shared/components/protrack-add-user-to-project-dialog/protrack-add-user-to-project-dialog.component';
import { ProtrackEditProjectDialogComponent } from 'src/app/shared/components/protrack-edit-project-dialog/protrack-edit-project-dialog.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-protrack-project-details',
  templateUrl: './protrack-project-details.component.html',
  styleUrls: ['./protrack-project-details.component.scss']
})
export class ProtrackProjectDetailsComponent implements OnInit {


  projectId!: String;
  project!: Project;
  kanbans?: [Kanban];
  start_date!: String;
  isToggled!: Boolean;
  totalBudget!:number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectSercvice: ProtrackProjectService,
    private kanbanService: ProtrackKanbanService,
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  openRemoveDialog(enterAnimationDuration: string, exitAnimationDuration: string, kanban: Kanban, project: Project): void {
    const dialogRef = this.dialog.open(ProtrackRemoveKanbanDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { kanban: kanban, project: project }
    });

    dialogRef.componentInstance.kanbanDeleted.subscribe(() => {
      this.refreshKanbans();
    });
  }


  openAddKanbanDialog(enterAnimationDuration: string, exitAnimationDuration: string, project: Project): void {
    const dialogRef = this.dialog.open(ProtrackAddKanbanDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { project: project }
    });

    dialogRef.componentInstance.kanbanAdded.subscribe(() => {
      this.refreshKanbans();
    });
  }

  openAddMemberDialog(enterAnimationDuration: string, exitAnimationDuration: string, project: Project): void {
    const dialogRef = this.dialog.open(ProtrackAddUserToProjectDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { project: project }
    });

    dialogRef.componentInstance.memberAdded.subscribe(() => {
      this.projectSercvice.getProjectById(this.projectId).subscribe(res => {
        this.project.members = res.project.members
      })

    });
  }

  openEditProject(enterAnimationDuration: string, exitAnimationDuration: string, project: Project): void {
    const dialogRef = this.dialog.open(ProtrackEditProjectDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { project: project }
    });

    dialogRef.componentInstance.projectEdited.subscribe(() => {
      this.projectSercvice.getProjectById(this.projectId).subscribe(res => {
        this.project.members = res.project.members
      })


      window.location.reload()
    });
  }


  refreshKanbans() {
    this.kanbanService.getAllKanbansOfProject(this.projectId).subscribe(res => {
      this.kanbans = res.kanbans;
      console.log(this.kanbans);
    });
  }

  ngOnInit(): void {


    this.projectId = String(this.route.snapshot.paramMap.get('id'))

    this.projectSercvice.getProjectById(String(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
      this.project = res.project
      this.start_date = new Date(this.project.start_date!.toString()).toDateString()
      console.log(this.project);
      this.isToggled = this.project.is_active ? this.project.is_active : false
      this.totalBudget= this.calculateTotalBudget();
    })

    this.kanbanService.getAllKanbansOfProject(this.projectId).subscribe(res => {
      this.kanbans = res.kanbans;
      console.log(this.kanbans);

    })

  }


  calculateTotalBudget(){
    let totalBudget = 0;
    for (let budget of this.project.budgets!) {
      totalBudget += budget.amount!
    }
    return totalBudget
  }

  removeMemberFromProject(id: String) {

    this.projectSercvice.removeMemberFromProject(this.projectId, id).subscribe(res => {
      console.log(res);
    })
    this.projectSercvice.getProjectById(this.projectId).subscribe(res => {
      this.project.members = res.project.members

    })
  }

  toggleSwitch(isChecked: Boolean) {

    this.projectSercvice.updateProject(this.project.id!, {
      "title": this.project.title,
      "description": this.project.description,
      "is_active": !isChecked,
      "start_date": this.project.start_date,
      "end_date": this.project.end_date,

    }).subscribe(res => {
      console.log(res);

    })
  }
  logout() {
    this.authService.logout().subscribe(res => {
      console.log(res);
    })

    this.router.navigate(['login'])
  }

}
