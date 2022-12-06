import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../services/apiservice.service';
import {UrlConfig} from '../../utility/url.config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public department: any = [];
  private urlConfig: UrlConfig | any;


  constructor(private apiService: ApiserviceService ) {
this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getAllDepartmentData();
  }
  // tslint:disable-next-line:typedef
  getAllDepartmentData(){
    const url: any = this.urlConfig.getAllDepartments;
    this.apiService.action(url, 'GET').subscribe((response) => {
      this.department = response.data.allDepartmentsData;
    });
  }


  // tslint:disable-next-line:typedef
  deleteDepartment(list: any) {
    Swal.fire({
      title: 'Are you sure Delete?',
      text: 'You will not be able to recover this Record file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const index = this.department.indexOf(list);
        const url: string = this.urlConfig.deleteDepartment;
        this.apiService.action(url, 'PUT', list).subscribe(
          (response) => {
            this.department.splice(index, 1);
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
