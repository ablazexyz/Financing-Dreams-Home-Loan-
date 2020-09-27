import { ApplicationDetailsComponent } from './user/user-dashboard-new/application-details/application-details.component';
import { CustDetailsComponent } from './user/user-dashboard-new/cust-details/cust-details.component';
import { UserDashboardHomeComponent } from './user/user-dashboard-new/user-dashboard-home/user-dashboard-home.component';
import { UserDashboardNewComponent } from './user/user-dashboard-new/user-dashboard-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/adminLogin', pathMatch: 'full' },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
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
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [AdminDashboardComponent, AdminLoginComponent];
