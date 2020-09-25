import { LoginComponent } from './user/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/userLogin', pathMatch: 'full'},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'adminDashboard', component: AdminDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'userLogin', component: LoginComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [AdminDashboardComponent, AdminLoginComponent];
