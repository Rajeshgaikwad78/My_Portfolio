import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  public staff: any = [];
  private urlConfig: UrlConfig | any;



  constructor( private apiService: ApiserviceService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getAllStaff();
  }

  // tslint:disable-next-line:typedef
  getAllStaff(){
    const url: any = this.urlConfig.getAllStaffList;
    this.apiService.action(url, 'GET').subscribe((response) => {
      this.staff = response.data.staffListData  ;
    });
  }

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
        const index = this.staff.indexOf(list);
        const url: string = this.urlConfig.deleteStaff;
        this.apiService.action(url, 'PUT', list).subscribe(
          (response) => {
            this.staff.splice(index, 1);
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
