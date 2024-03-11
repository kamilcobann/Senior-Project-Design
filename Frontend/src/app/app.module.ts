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
import { heroUsers,heroComputerDesktop,heroTableCells,heroBars3,heroXMark,
  heroUserGroup,heroCalendar,heroCog6Tooth,heroUserCircle,heroMagnifyingGlass,
  heroBell,heroInbox,heroUser } from '@ng-icons/heroicons/outline';
import { ProtrackSidebarComponent } from './shared/components/protrack-sidebar/protrack-sidebar.component';
import { ProtrackNavbarComponent } from './shared/components/protrack-navbar/protrack-navbar.component';
import { ProtrackSidebarListItemComponent } from './shared/components/protrack-sidebar-list-item/protrack-sidebar-list-item.component';
import { ProtrackNavbarListItemComponent } from './shared/components/protrack-navbar-list-item/protrack-navbar-list-item.component';
import { ProtrackBoxComponent } from './shared/components/protrack-box/protrack-box.component';
import { ProtrackProjectListItemComponent } from './shared/components/protrack-project-list-item/protrack-project-list-item.component';
import { ProtrackUpcomingEventsListComponent } from './shared/components/protrack-upcoming-events-list/protrack-upcoming-events-list.component';
import { ProtrackUpcomingEventsListItemComponent } from './shared/components/protrack-upcoming-events-list-item/protrack-upcoming-events-list-item.component';
import { ProtrackProjectWidgetComponent } from './shared/components/protrack-project-widget/protrack-project-widget.component';
import { ProtrackProjectsComponent } from './pages/protrack-projects/protrack-projects.component';
import { ProtrackPrimaryButtonComponent } from './shared/components/protrack-primary-button/protrack-primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtrackLoginComponent,
    ProtrackRegisterComponent,
    ProtrackProjectDashboardComponent,
    ProtrackSidebarComponent,
    ProtrackNavbarComponent,
    ProtrackSidebarListItemComponent,
    ProtrackNavbarListItemComponent,
    ProtrackBoxComponent,
    ProtrackProjectListItemComponent,
    ProtrackUpcomingEventsListComponent,
    ProtrackUpcomingEventsListItemComponent,
    ProtrackProjectWidgetComponent,
    ProtrackProjectsComponent,
    ProtrackPrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      heroUsers,heroComputerDesktop,heroBars3,heroTableCells,heroXMark,heroUserGroup,heroCalendar,heroCog6Tooth,heroUserCircle,heroMagnifyingGlass,heroBell,heroInbox,heroUser
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
