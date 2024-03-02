import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtrackLoginComponent } from './pages/protrack-login/protrack-login.component';
import { ProtrackRegisterComponent } from './pages/protrack-register/protrack-register.component';
import { ProtrackProjectDashboardComponent } from './pages/protrack-project-dashboard/protrack-project-dashboard.component';

const routes: Routes = [
  {path : 'login',component:ProtrackLoginComponent},
  {path : 'register',component:ProtrackRegisterComponent},
  {path : 'dashboard',component:ProtrackProjectDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
