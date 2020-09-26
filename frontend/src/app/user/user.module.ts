import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ApplicationDetailsComponent } from './application-details/application-details.component';


@NgModule({
  declarations: [UserDashboardComponent, LoginComponent, RegisterComponent, CustomerDetailsComponent, ApplicationDetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [UserDashboardComponent],
})
export class UserModule {}
