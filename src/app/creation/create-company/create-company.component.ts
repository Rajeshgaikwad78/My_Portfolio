import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  private urlConfig: UrlConfig | any;
  companyForm: FormGroup;
  typeValue = 1;
  update = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService, private router: Router,
              private rout: ActivatedRoute, private toastr: ToastrService) {
    this.urlConfig = new UrlConfig(),
      this.companyForm = this.formBuilder.group({
        companyName: [''],
        companyPan: [''],
        companyTypeId: [this.typeValue],
        companyGstinNo: [''],
        companyVatNo: [''],
        companyTanNo: [''],
        companyCinNo: [''],
        companyPtec: [''],
        companyPtrc: [''],
        companyEsic: [''],
        companyPfNo: [''],
        companyMsme: [''],
        companyBocw: [''],
        companyOtl: [''],
        companyEmail: [''],
        companyPhone: [''],
        companyNob: [''],
        companyContry: [''],
        companyState: [''],
        companyCity: [''],
        companyAddress: [''],
        bank: [''],
        branch: [''],
        branchcode: [''],
        micr: [''],
        account: [''],
        ifsc: [''],
      });
  }

  ngOnInit(): void {
    this.getCompanyDataById();
  }


  // tslint:disable-next-line:typedef
  onSubmit() {
    const body = this.companyForm.value;
    if (this.update) {
      const url = this.urlConfig.updateCompany;
      this.apiService.action(url, 'PUT', body).subscribe(
        (response) => {
        this.toastr.success(response.message, 'Success!');
        this.router.navigate(['/company']);
      });
    } else {
      const url: string = this.urlConfig.createCompany;
      this.apiService.action(url, 'POST', body).subscribe(
        (response) => {
          console.log(response);
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/company']);
      });
    }
  }

  // tslint:disable-next-line:typedef
  getCompanyDataById() {
    const companyId: any = this.rout.snapshot.params.companyId;
    if (companyId){
      this.update = true;
      const url: any = this.urlConfig.getCompanyDataById + '/' + companyId;
      this.apiService.action(url, 'GET').subscribe(
        (response) => {
          // tslint:disable-next-line:triple-equals no-unused-expression
          this.update = true;
          this.companyForm.patchValue(response.data.companyInfo);
        });
    } else {
      this.update = false;
    }
  }
}
