import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiserviceService} from '../../services/apiservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-serivce-group',
  templateUrl: './create-serivce-group.component.html',
  styleUrls: ['./create-serivce-group.component.scss']
})
export class CreateServiceGroupComponent implements OnInit {
  serviceGroupForm: FormGroup | any;
  private urlConfig: UrlConfig | any;
  submit = false;
  button = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService,
              private  router: Router, private rout: ActivatedRoute, private toastr: ToastrService) {
    this.urlConfig = new UrlConfig();
    this.serviceGroupForm = this.formBuilder.group({
      serviceGroupId: [null, []],
      serviceGroupName: ['']
    });

  }

  ngOnInit(): void {
    this.getServiceGroupById();

  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const body = this.serviceGroupForm.value;
    if (this.button) {
      const url = this.urlConfig.updateServiceGroup;
      this.apiService.action(url, 'PUT', body).subscribe(
        (response) => {
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/servicegroup']);
        });
    } else {
      const url = this.urlConfig.addNewServiceGroup;
      this.apiService.action(url, 'POST', body).subscribe(
        (response) => {
          this.toastr.success(response.message, 'Success!');
          this.router.navigate(['/servicegroup']);
        });
    }
  }

  // tslint:disable-next-line:typedef
  getServiceGroupById(){
    const serviceGroupId = this.rout.snapshot.params.serviceGroupId;
    if (serviceGroupId){
      this.button = true;
      const url: any = this.urlConfig.getServiceGroupById    + '/' + serviceGroupId;
      this.apiService.action(url, 'GET').subscribe(
        (response) => {
          this.button = true;
          this.serviceGroupForm.patchValue(response.data.serviceGroupData);
        }
      )
    }else{
      this.button = false;
    }


  }


}
