import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtrackLoginComponent } from './pages/protrack-login/protrack-login.component';
import { ProtrackRegisterComponent } from './pages/protrack-register/protrack-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProtrackProjectDashboardComponent } from './pages/protrack-project-dashboard/protrack-project-dashboard.component';
import { heroUsers,heroComputerDesktop,heroTableCells,heroBars3,heroXMark,heroUserGroup,heroCalendar,heroCog6Tooth } from '@ng-icons/heroicons/outline';
import { ProtrackSidebarComponent } from './shared/components/protrack-sidebar/protrack-sidebar.component';
import { ProtrackNavbarComponent } from './shared/components/protrack-navbar/protrack-navbar.component';
import { ProtrackSidebarListItemComponent } from './shared/components/protrack-sidebar-list-item/protrack-sidebar-list-item.component';
import { ProtrackNavbarListItemComponent } from './shared/components/protrack-navbar-list-item/protrack-navbar-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtrackLoginComponent,
    ProtrackRegisterComponent,
    ProtrackProjectDashboardComponent,
    ProtrackSidebarComponent,
    ProtrackNavbarComponent,
    ProtrackSidebarListItemComponent,
    ProtrackNavbarListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      heroUsers,heroComputerDesktop,heroBars3,heroTableCells,heroXMark,heroUserGroup,heroCalendar,heroCog6Tooth
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
