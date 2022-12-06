import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiserviceService} from '../../services/apiservice.service';
import {UrlConfig} from '../../utility/url.config';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.scss']
})
export class CreateBranchComponent implements OnInit {
  private urlConfig: UrlConfig | any;
  public branch: any = [];
  public company: any = [];
  branchForm: FormGroup | any;
  update = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService,
              private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.branchForm = this.formBuilder.group({
      branchId: [null, []],
      companyId: [''],
      branchName: [''],
      branchPan: [''],
      branchGstinNo: [''],
      branchTanNo: [''],
      branchEmail: [''],
      branchPhone: [''],
      branchAddress: [''],
      branchContry: [''],
      branchState: [''],
      branchCity: [''],
    });
    this.getAllCompanies();
    this.getBranchDataById();
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    const body = this.branchForm.value;
    if (this.update){
      const url = this.urlConfig.updateCompanyBranchInfo;
      this.apiService.action(url, 'PUT', body).subscribe(
        (response) => {
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/branch']);
      });

    }else{
       const url: string = this.urlConfig.createNewBranch;
       this.apiService.action(url, 'POST', body).subscribe(
         (response) => {
         this.toastr.success(response.message, 'Success!');
         this.router.navigate(['/branch']);
      });
    }
  }

  // tslint:disable-next-line:typedef
  getAllCompanies(){
    const url = this.urlConfig.getAllCompanies;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.company = response.data.allCompaniesData;
      }
    );
  }
  // tslint:disable-next-line:typedef
  getBranchDataById() {
    const branchId = this.route.snapshot.params.branchId;
    if (branchId) {
      this.update = true;
      const url: any = this.urlConfig.getBranchDataById + '/' + branchId;
      this.apiService.action(url, 'GET').subscribe(
        (response) => {
          this.update = true;
          this.branchForm.patchValue(response.data.companyBranchInfo);
        });
    } else {
      this.update = false;
    }
  }
}
