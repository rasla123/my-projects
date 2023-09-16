import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
//import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { UserlistComponent } from './userlist/userlist.component';
import { UpdateComponent } from './update/update.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { EmployeeToolbarComponent } from './employee-toolbar/employee-toolbar.component';
import { EmployeeComponent } from './service/employee/employee.component';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { EmployeeLeaveComponent } from './employee-leave/employee-leave.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { UserLeaveDetailsComponent } from './user-leave-details/user-leave-details.component'
import { AuthService } from './service/auth.service';
@NgModule({
  declarations: [
    AppComponent,
   // RegisterComponent,
    LoginComponent,
    DashboardComponent,
   // UserlistComponent,
    UpdateComponent,
    ChartComponent,
    DashboardSidenavComponent,
    MainComponentComponent,
    DoughnutChartComponent,
    BarChartComponent,
    ListofemployeesComponent,
    EmployeeToolbarComponent,
    EmployeeComponent,
    EmployeeDisplayComponent,
    EmployeeLeaveComponent,
    EmpDashboardComponent,
    LeaveApplicationComponent,
    EmpProfileComponent,
    UserLeaveDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
