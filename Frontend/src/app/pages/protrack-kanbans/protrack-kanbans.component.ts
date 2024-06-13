import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Kanban } from 'src/app/models/Kanban';
import { Project } from 'src/app/models/Project';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProtrackKanbanService } from 'src/app/services/protrack-kanban.service';
import { ProtrackProjectService } from 'src/app/services/protrack-project.service';
import { ProtrackRemoveKanbanDialogComponent } from 'src/app/shared/components/protrack-remove-kanban-dialog/protrack-remove-kanban-dialog.component';

@Component({
  selector: 'app-protrack-kanbans',
  templateUrl: './protrack-kanbans.component.html',
  styleUrls: ['./protrack-kanbans.component.scss']
})
export class ProtrackKanbansComponent implements OnInit {

  kanbans?: Kanban[]
  ownedKanbans?: Kanban[]
  joinedKanbans?: Kanban[]
  activeCount?: Number
  inactiveCount?: Number
  response?:Kanban[]
  constructor(
    private router: Router,
    private kanbanService: ProtrackKanbanService,
    private authService: AuthService,
    public dialog: MatDialog,

  ) { }
  ngOnInit(): void {
    this.kanbanService.getAllKanbans().subscribe(res => {
      this.kanbans = res.kanbans
      this.joinedKanbans = this.kanbans?.filter(kanban=>{
        return kanban.members?.some(member=>member.id == (sessionStorage.getItem('userId')))
      })
    });

    this.kanbanService.getAllKanbansOfUser().subscribe(res=>{
      this.ownedKanbans = res.kanbans
    })

  }

  openRemoveDialog(enterAnimationDuration: string, exitAnimationDuration: string, kanban: Kanban, project: Project): void {
    const dialogRef = this.dialog.open(ProtrackRemoveKanbanDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { kanban: kanban, project: project }
    });

    dialogRef.componentInstance.kanbanDeleted.subscribe(() => {
      this.kanbanService.getAllKanbansOfUser().subscribe(res=>{
        this.ownedKanbans = res.kanbans
      })
    });
  }
  logout()
  {
    this.authService.logout().subscribe(res=>{
    })

    this.router.navigate(['login'])
  }
}
