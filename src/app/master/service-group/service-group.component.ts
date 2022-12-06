import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-service-group',
  templateUrl: './service-group.component.html',
  styleUrls: ['./service-group.component.scss']
})
export class ServiceGroupComponent implements OnInit {
  public serviceGroup: any = [] ;
  private urlConfig: UrlConfig;

  constructor(private apiService: ApiserviceService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getServiceGroup();
  }

  // tslint:disable-next-line:typedef
  getServiceGroup(){
    const url = this.urlConfig.getAllServiceGroups;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.serviceGroup = response.data.allServicesData;
      });
  }

  // tslint:disable-next-line:typedef
  deleteRow(list: any){
      Swal.fire({
        title: 'Are you sure Delete?',
        text: 'You will not be able to recover this Record file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          const index = this.serviceGroup.indexOf(list);
          const url: string = this.urlConfig.deleteServiceGroup;
          this.apiService.action(url, 'PUT', list).subscribe(
            (response) => {
              this.serviceGroup.splice(index, 1);
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
