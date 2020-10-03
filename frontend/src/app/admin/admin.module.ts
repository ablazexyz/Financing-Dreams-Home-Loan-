import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';



@NgModule({
  declarations: [AdminDashboardComponent,
                AdminLoginComponent,
                HomeViewComponent,
                ProfileComponent,
                ViewApplicationsComponent,
                ViewCustomerComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AdminDashboardComponent,
    AdminLoginComponent
  ],

})
export class AdminModule { }
