import { AdminService } from './admin/admin.service';
import { UserModule } from './user/user.module';
import { CalculatorsModule } from './calculators/calculators.module';
import { HomePageModule } from './home-page/home-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CarouselComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HomePageModule,
    HighchartsChartModule,
    FormsModule,
    CalculatorsModule,
    UserModule,
    HttpClientModule
  ],

  providers: [UserService, AdminService,DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
