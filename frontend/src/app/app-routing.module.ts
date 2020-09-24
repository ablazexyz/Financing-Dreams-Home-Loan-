import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  {path: '', redirectTo: '/adminLogin', pathMatch: 'full'},
  {path: 'adminLogin', component: AdminLoginComponent},
  {path: 'adminDashboard', component: AdminDashboardComponent}
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
