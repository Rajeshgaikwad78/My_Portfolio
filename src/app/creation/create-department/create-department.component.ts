import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiserviceService} from '../../services/apiservice.service';
import {UrlConfig} from '../../utility/url.config';
import {ActivatedRoute, Route, Router} from '@angular/router';
import Swal from 'sweetalert2';
import * as url from 'url';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  public company: any = [];
  public branch: any = [];
  update = false;
  departmentForm: FormGroup;
  private urlConfig: UrlConfig | any;


  constructor(private formBuilder: FormBuilder, private  apiService: ApiserviceService, private router: Router,
              private rout: ActivatedRoute, private toastr: ToastrService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.departmentForm = this.formBuilder.group({
      departmentId: [null, []],
      companyId: [''],
      branchId: [''],
      departmentName: [''],
      departmentEmail: [''],
      departmentPhone: [''],
    });

    this.getAllCompany();
    this.getAllBranch();
    this.getDepartmentDataById();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const body = this.departmentForm.value;
    if (this.update) {
      const url = this.urlConfig.updateDepartment;
      this.apiService.action(url, 'PUT', body).subscribe((response) => {
        this.toastr.success(response.message, 'Success!');
        this.router.navigate(['/department']);
      });
    } else {
      const url = this.urlConfig.addNewDepartment;
      this.apiService.action(url, 'POST', body).subscribe((response) => {
        this.toastr.success(response.message, 'Success!');
        this.router.navigate(['/department']);
      });
    }
  }

  // tslint:disable-next-line:typedef
  getAllCompany(){
    const url = this.urlConfig.getAllCompanies;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.company = response.data.allCompaniesData;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getAllBranch() {
    const url = this.urlConfig.getAllBranches;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        console.log(response);
        this.branch = response.data.allCompanyBranches;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getDepartmentDataById(){
    const departmentId = this.rout.snapshot.params.departmentId;
    if (departmentId){
      this.update = true;
      const url: any = this.urlConfig.getDepartmentDataById + '/' + departmentId;
      this.apiService.action(url, 'GET').subscribe((response) => {
        this.update = true;
        this.departmentForm.patchValue(response.data.departmentInfo);
      });
    }else{
      this.update = false;
    }

  }


}
