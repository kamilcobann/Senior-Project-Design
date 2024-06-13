import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtrackLoginComponent } from './pages/protrack-login/protrack-login.component';
import { ProtrackRegisterComponent } from './pages/protrack-register/protrack-register.component';
import { ProtrackProjectDashboardComponent } from './pages/protrack-project-dashboard/protrack-project-dashboard.component';
import { ProtrackProjectsComponent } from './pages/protrack-projects/protrack-projects.component';
import { ProtrackCreateProjectComponent } from './pages/protrack-create-project/protrack-create-project.component';
import { ProtrackProjectDetailsComponent } from './pages/protrack-project-details/protrack-project-details.component';
import { ProtrackKanbanDetailsComponent } from './pages/protrack-kanban-details/protrack-kanban-details.component';
import { ProtrackMembersComponent } from './pages/protrack-members/protrack-members.component';
import { ProtrackKanbansComponent } from './pages/protrack-kanbans/protrack-kanbans.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: ProtrackLoginComponent },
  { path: 'register', component: ProtrackRegisterComponent },
  { path: 'dashboard', component: ProtrackProjectDashboardComponent },
  { path: 'register', component: ProtrackRegisterComponent },
  { path: 'projects', component: ProtrackProjectsComponent },
  { path: 'projects/create', component: ProtrackCreateProjectComponent },
  { path: 'projects/:id', component: ProtrackProjectDetailsComponent },
  { path: 'projects/:id/kanbans/:kanbanId', component: ProtrackKanbanDetailsComponent },
  { path: 'members', component: ProtrackMembersComponent },
  { path: 'kanbans', component: ProtrackKanbansComponent },
  // { path: 'kanbans/:id', component: ProtrackKanbanDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
