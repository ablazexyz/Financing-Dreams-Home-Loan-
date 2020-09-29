import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { UserDashboardNewComponent } from './user-dashboard-new/user-dashboard-new.component';
import { UserDashboardHomeComponent } from './user-dashboard-new/user-dashboard-home/user-dashboard-home.component';
import { CustDetailsComponent } from './user-dashboard-new/cust-details/cust-details.component';
import { ApplicationDetailsComponent } from './user-dashboard-new/application-details/application-details.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardNewComponent,
    UserDashboardHomeComponent,
    CustDetailsComponent,
    ApplicationDetailsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule, FormsModule],

  exports: [UserDashboardComponent, UserDashboardNewComponent],
})
export class UserModule {}
