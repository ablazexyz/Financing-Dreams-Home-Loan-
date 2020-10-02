import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';



@NgModule({
  declarations: [AdminDashboardComponent, AdminLoginComponent, HomeViewComponent, ProfileComponent, ViewApplicationsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminDashboardComponent,
    AdminLoginComponent
  ],

})
export class AdminModule { }
