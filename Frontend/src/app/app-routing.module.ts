import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtrackLoginComponent } from './pages/protrack-login/protrack-login.component';

const routes: Routes = [
  {path : 'login',component:ProtrackLoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
