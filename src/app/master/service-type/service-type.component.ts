import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.scss']
})
export class ServiceTypeComponent implements OnInit {
  private urlConfig: UrlConfig | any;
  public serviceType: any = [];

  constructor(private apiService: ApiserviceService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getAllServiceTypes();
  }

  // tslint:disable-next-line:typedef
  getAllServiceTypes(){
    const url = this.urlConfig.getAllServiceTypes;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.serviceType = response.data.allServiceTypesData;
      });
  }

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  deleteRecord(list: any) {
    Swal.fire({
      title: 'Are you sure Delete?',
      text: 'You will not be able to recover this Record file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const index = this.serviceType.indexOf(list);
        const url: string = this.urlConfig.deleteServiceType;
        this.apiService.action(url, 'PUT', list).subscribe(
          (response) => {
            this.serviceType.splice(index, 1);
          });
        Swal.fire(
          'Deleted!',
          'Your Record file has been deleted.',
          'success'
        );
      }
    });
  }

}
