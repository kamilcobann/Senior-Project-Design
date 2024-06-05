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
  heroBell,heroInbox,heroUser,
  heroUserPlus,
  heroTrash,
  heroUserMinus,
  heroPencil} from '@ng-icons/heroicons/outline';
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
import { ProtrackCreateProjectComponent } from './pages/protrack-create-project/protrack-create-project.component';
import { ProtrackProjectDetailsComponent } from './pages/protrack-project-details/protrack-project-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProtrackRemoveKanbanDialogComponent } from './shared/components/protrack-remove-kanban-dialog/protrack-remove-kanban-dialog.component';
import { ProtrackAddKanbanDialogComponent } from './shared/components/protrack-add-kanban-dialog/protrack-add-kanban-dialog.component';
import { ProtrackAddUserToProjectDialogComponent } from './shared/components/protrack-add-user-to-project-dialog/protrack-add-user-to-project-dialog.component';
import { ProtrackEditProjectDialogComponent } from './shared/components/protrack-edit-project-dialog/protrack-edit-project-dialog.component';
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
    ProtrackPrimaryButtonComponent,
    ProtrackCreateProjectComponent,
    ProtrackProjectDetailsComponent,
    ProtrackRemoveKanbanDialogComponent,
    ProtrackAddKanbanDialogComponent,
    ProtrackAddUserToProjectDialogComponent,
    ProtrackEditProjectDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      heroPencil,heroTrash,heroUserMinus,heroUserPlus,heroUsers,heroComputerDesktop,heroBars3,heroTableCells,heroXMark,heroUserGroup,heroCalendar,heroCog6Tooth,heroUserCircle,heroMagnifyingGlass,heroBell,heroInbox,heroUser
    }),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
