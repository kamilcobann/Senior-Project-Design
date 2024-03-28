import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtrackLoginComponent } from './pages/protrack-login/protrack-login.component';
import { ProtrackRegisterComponent } from './pages/protrack-register/protrack-register.component';
import { ProtrackProjectDashboardComponent } from './pages/protrack-project-dashboard/protrack-project-dashboard.component';
import { ProtrackProjectsComponent } from './pages/protrack-projects/protrack-projects.component';
import { ProtrackCreateProjectComponent } from './pages/protrack-create-project/protrack-create-project.component';
import { ProtrackProjectDetailsComponent } from './pages/protrack-project-details/protrack-project-details.component';

const routes: Routes = [
  {path : 'login',component:ProtrackLoginComponent},
  {path : 'register',component:ProtrackRegisterComponent},
  {path : 'dashboard',component:ProtrackProjectDashboardComponent},
  {path : 'register',component:ProtrackRegisterComponent},
  {path : 'projects',component:ProtrackProjectsComponent},
  {path : 'projects/create', component: ProtrackCreateProjectComponent},
  {path : 'projects/details', component:ProtrackProjectDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
