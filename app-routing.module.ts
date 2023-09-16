import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { UserlistComponent } from './userlist/userlist.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { EmployeeToolbarComponent } from './employee-toolbar/employee-toolbar.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { UserLeaveDetailsComponent } from './user-leave-details/user-leave-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  //{path:'register',component:RegisterComponent},
  {path:'admin',component:DashboardComponent},
 // {path:'user',component:UserlistComponent},
  {path:'maincomponent', component:MainComponentComponent},
  {path:'employeetoolbar', component:EmployeeToolbarComponent},
  {path:'user/:id', component:EmpDashboardComponent},
  {path:'leaveapplication', component:LeaveApplicationComponent},
 // { path: '', redirectTo: '/empdashboard', pathMatch: 'full' },
  {path:'profile', component:EmpProfileComponent},
  {path:'donutchart', component:DoughnutChartComponent},
  {path:'leave-details/:employeeId', component:UserLeaveDetailsComponent,  data: { employeeFullName: 'Full Name Here' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
