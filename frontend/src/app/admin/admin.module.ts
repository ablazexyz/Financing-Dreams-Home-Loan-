import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [AdminDashboardComponent, AdminLoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminDashboardComponent,
    AdminLoginComponent
  ],

})
export class AdminModule { }
