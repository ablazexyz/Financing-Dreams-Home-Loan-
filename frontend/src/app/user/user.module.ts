import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserDashboardComponent, LoginComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [UserDashboardComponent],
})
export class UserModule {}
