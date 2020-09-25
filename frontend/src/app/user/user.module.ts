import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDashboardNewComponent } from './user-dashboard-new/user-dashboard-new.component';

@NgModule({
  declarations: [UserDashboardComponent, UserDashboardNewComponent],
  imports: [CommonModule],
  exports: [UserDashboardComponent, UserDashboardNewComponent],
})
export class UserModule {}
