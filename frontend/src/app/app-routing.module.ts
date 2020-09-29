import { ViewApplicationDetailsComponent } from './user/user-dashboard-new/view-application-details/view-application-details.component';
import { ViewCustomerDetailsComponent } from './user/user-dashboard-new/view-customer-details/view-customer-details.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ApplicationDetailsComponent } from './user/user-dashboard-new/application-details/application-details.component';
import { CustDetailsComponent } from './user/user-dashboard-new/cust-details/cust-details.component';
import { UserDashboardHomeComponent } from './user/user-dashboard-new/user-dashboard-home/user-dashboard-home.component';
import { UserDashboardNewComponent } from './user/user-dashboard-new/user-dashboard-new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'user', component: UserDashboardComponent },
  { path: 'userLogin', component: LoginComponent },
  { path: 'userRegister', component: RegisterComponent },
  {
    path: 'userDashboard',
    component: UserDashboardNewComponent,
    children: [
      { path: '', redirectTo: 'userHome', pathMatch: 'full' },
      { path: 'userHome', component: UserDashboardHomeComponent },
      { path: 'customerDetails', component: CustDetailsComponent },
      { path: 'applicationDetails', component: ApplicationDetailsComponent },
      { path: 'viewCustomerDetails', component: ViewCustomerDetailsComponent },
      {
        path: 'viewApplicationDetails',
        component: ViewApplicationDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AdminDashboardComponent,
  AdminLoginComponent,
  HomeComponent,
  LoginComponent,
  RegisterComponent,
];
