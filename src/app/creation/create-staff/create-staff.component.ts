import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.scss']
})
export class CreateStaffComponent implements OnInit {
  public staffForm: any = [];
  public company: any = [];
  public branch: any = [];
  public department: any = [];
  public role: any = [];
  private urlConfig: UrlConfig | any;
  update = false;

  constructor(private apiService: ApiserviceService, private formBuilder: FormBuilder, private router: Router,
              private rout: ActivatedRoute, private toastr: ToastrService) {
    this.urlConfig = new UrlConfig();
    this.staffForm = this.formBuilder.group({
      staffId: [null, []],
        userId: [null, []],
      companyId: [''],
      branchId: [''],
      departmentId: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      gender: [''],
      dob: [''],
      userRoleId: [''],
      email: [''],
      password: [''],
      mobile: [''],
      staffPanNo: [''],
      staffAdharNo: [''],
      permanentAddress: [''],
      officeAddress: [''],
      bankName: [''],
      bankBranchName: [''],
      bankBranchCode: [''],
      bankAccountNo: [''],
      bankIfscCode: [''],
      bankMicrCode: [''],
    });
  }

  ngOnInit(): void {
    this.getStaffDataById();
    this.getAllCompany();
    this.getAllBranch();
    this.getAllDepartmentData();
    this.getAllUserRole();
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    const body = this.staffForm.value;
    const staffId: any = this.rout.snapshot.params.staffId;
    const userId: any = this.rout.snapshot.params.userId;
    if (this.update){
      const url = this.urlConfig.updateStaffInfo + '/' + userId + '/' + staffId;
      this.apiService.action(url, 'PUT', body).subscribe(
        (response) => {
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/staff']);
        });

    }else{
      const url = this.urlConfig.addNewStaff;
      this.apiService.action(url, 'POST', body).subscribe(
        (response) => {
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/staff']);

     });
    }
  }

  // tslint:disable-next-line:typedef
  getAllCompany(){
    const url = this.urlConfig.getAllCompanies;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        // console.log(response);
        this.company = response.data.allCompaniesData;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getAllBranch() {
    const url = this.urlConfig.getAllBranches;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
       // console.log(response);
        this.branch = response.data.allCompanyBranches;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getAllDepartmentData(){
    const url: any = this.urlConfig.getAllDepartments;
    this.apiService.action(url, 'GET').subscribe((response) => {
     // console.log(response);
      this.department = response.data.allDepartmentsData;
    });
  }

  // tslint:disable-next-line:typedef
  getAllUserRole() {
    const url = this.urlConfig.getAllUserRoles;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
       // console.log(response);
        this.role = response.data;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getStaffDataById(){
    const staffId = this.rout.snapshot.params.staffId;
    if (staffId){
      this.update = true;
      const url = this.urlConfig.getStaffInfoByStaffId + '/' + staffId;
      this.apiService.action(url, 'GET').subscribe((response) => {
        this.staffForm.patchValue(response.data.staffListData);
      });
    }
  }


}
