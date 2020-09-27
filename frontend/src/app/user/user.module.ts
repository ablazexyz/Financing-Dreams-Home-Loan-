import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardNewComponent } from './user-dashboard-new/user-dashboard-new.component';
import { UserDashboardHomeComponent } from './user-dashboard-new/user-dashboard-home/user-dashboard-home.component';
import { Routes, RouterModule } from '@angular/router';
import { CustDetailsComponent } from './user-dashboard-new/cust-details/cust-details.component';
import { ApplicationDetailsComponent } from './user-dashboard-new/application-details/application-details.component';

const routes: Routes = [
  {
    path: 'userDashboard',
    component: UserDashboardNewComponent,
    children: [
      { path: 'userHome', component: UserDashboardHomeComponent },
      { path: 'customerDetails', component: CustDetailsComponent },
      { path: 'applicationDetails', component: ApplicationDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserDashboardNewComponent,
    UserDashboardHomeComponent,
    CustDetailsComponent,
    ApplicationDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [UserDashboardComponent, UserDashboardNewComponent, RouterModule],
})
export class UserModule {}
