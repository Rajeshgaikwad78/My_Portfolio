import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainComponent} from './layout/main-component/main-component.component';
import {HeaderComponent} from './layout/header-component/header-component.component';
import {SidebarComponent} from './layout/sidebar-component/sidebar-component.component';
import {FooterComponent} from './layout/footer-component/footer-component.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { CompanyComponent } from './master/company/company.component';
import { BranchComponent } from './master/branch/branch.component';
import { DepartmentComponent } from './master/department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCompanyComponent } from './creation/create-company/create-company.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateBranchComponent } from './creation/create-branch/create-branch.component';
import { CreateDepartmentComponent } from './creation/create-department/create-department.component';
import { StaffComponent} from './master/staff/staff.component';
import { CreateStaffComponent } from './creation/create-staff/create-staff.component';
import { LoginComponent } from './master/login/login.component';
import { ForgotComponent } from './master/forgot/forgot.component';
import { RegisterComponent } from './master/register/register.component';
import { ClientComponent } from './master/client/client.component';
import { CreateClientComponent } from './creation/create-client/create-client.component';
import {AuthGuard} from './guards/auth-guards';
import {AnonGuard} from './guards/anon-guards';
import {ApiserviceService} from './services/apiservice.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import {ServiceGroupComponent} from './master/service-group/service-group.component';
import {CreateServiceGroupComponent} from './creation/create-service-group/create-serivce-group.component';
import { ServiceTypeComponent } from './master/service-type/service-type.component';
import { CreateServiceTypeComponent } from './creation/create-service-type/create-service-type.component';
import { CreateServiceComponent } from './creation/create-service/create-service.component';
import { DatePipe } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    CompanyComponent,
    BranchComponent,
    DepartmentComponent,
    CreateCompanyComponent,
    CreateBranchComponent,
    CreateDepartmentComponent,
    StaffComponent,
    CreateStaffComponent,
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
    ClientComponent,
    CreateClientComponent,
    ServiceGroupComponent,
    CreateServiceGroupComponent,
    ServiceTypeComponent,
    CreateServiceTypeComponent,
    CreateServiceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    CommonModule,
    Ng2SearchPipeModule,
  ],
  providers: [DatePipe, AuthGuard, AnonGuard, ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
