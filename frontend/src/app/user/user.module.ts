import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardNewComponent } from './user-dashboard-new/user-dashboard-new.component';
import { UserDashboardHomeComponent } from './user-dashboard-new/user-dashboard-home/user-dashboard-home.component';
import { CustDetailsComponent } from './user-dashboard-new/cust-details/cust-details.component';
import { ApplicationDetailsComponent } from './user-dashboard-new/application-details/application-details.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserDashboardNewComponent,
    UserDashboardHomeComponent,
    CustDetailsComponent,
    ApplicationDetailsComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [UserDashboardComponent, UserDashboardNewComponent],
})
export class UserModule {}
