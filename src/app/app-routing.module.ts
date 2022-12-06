import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './layout/main-component/main-component.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {CompanyComponent} from './master/company/company.component';
import {BranchComponent} from './master/branch/branch.component';
import {DepartmentComponent} from './master/department/department.component';
import {CreateCompanyComponent} from './creation/create-company/create-company.component';
import {CreateBranchComponent} from './creation/create-branch/create-branch.component';
import {CreateDepartmentComponent} from './creation/create-department/create-department.component';
import {StaffComponent} from './master/staff/staff.component';
import {CreateStaffComponent} from './creation/create-staff/create-staff.component';
import {LoginComponent} from './master/login/login.component';
import {RegisterComponent} from './master/register/register.component';
import {ForgotComponent} from './master/forgot/forgot.component';
import {ClientComponent} from './master/client/client.component';
import {AuthGuard} from './guards/auth-guards';
import {AnonGuard} from './guards/anon-guards';
import {ServiceGroupComponent} from './master/service-group/service-group.component';
import {CreateServiceGroupComponent} from './creation/create-service-group/create-serivce-group.component';
import {CreateServiceComponent} from './creation/create-service/create-service.component';
import {CreateServiceTypeComponent} from './creation/create-service-type/create-service-type.component';
import {ServiceTypeComponent} from './master/service-type/service-type.component';
import {CreateClientComponent} from './creation/create-client/create-client.component';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'company' , component: CompanyComponent },
      {path: 'branch' , component: BranchComponent },
      {path: 'department' , component: DepartmentComponent },
      {path: 'staff', component: StaffComponent},
      {path: 'company/companycreation', component: CreateCompanyComponent},
      {path: 'company/companyUpdate/:companyId', component: CreateCompanyComponent},
      {path: 'branch/branchcreation', component: CreateBranchComponent },
      {path: 'branch/branchUpdate/:branchId', component: CreateBranchComponent },
      {path: 'department/departmentcreation', component: CreateDepartmentComponent},
      {path: 'department/departmentupdate/:departmentId', component: CreateDepartmentComponent},
      {path: 'staff/staffcreation', component: CreateStaffComponent},
      { path: 'staff/staffUpdate/:userId/:staffId', component: CreateStaffComponent },
      {path: 'client', component: ClientComponent},
      {path: 'client/clientcreation', component: CreateClientComponent},
      {path: 'servicecreation', component: CreateServiceComponent},
      {path: 'servicegroup', component: ServiceGroupComponent},
      {path: 'servicegroup/servicegroupcreation', component: CreateServiceGroupComponent},
      {path: 'serviceGroup/serviceGroupUpdate/:serviceGroupId', component: CreateServiceGroupComponent},
      {path: 'servicetype', component: ServiceTypeComponent},
      {path: 'servicetype/servicetypecreation', component: CreateServiceTypeComponent},


    ]},
  { path: 'login', component: LoginComponent, canActivate: [AnonGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AnonGuard]},
  { path: 'forgot-password', component: ForgotComponent, canActivate: [AnonGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
