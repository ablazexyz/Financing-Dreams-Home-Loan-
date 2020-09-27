import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { UserDashboardNewComponent } from './user-dashboard-new/user-dashboard-new.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardNewComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [UserDashboardComponent, UserDashboardNewComponent],
})
export class UserModule {}
