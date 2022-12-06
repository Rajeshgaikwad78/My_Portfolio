import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  private urlConfig: UrlConfig | any;
  public company: any = [];

  constructor(private apiService: ApiserviceService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getAllCompanies();
  }
  // tslint:disable-next-line:typedef
  getAllCompanies() {
    const url = this.urlConfig.getAllCompanies;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.company = response.data.allCompaniesData;
      }
    );
  }

  // tslint:disable-next-line:typedef
  deleteCompany(list: any){
    Swal.fire({
      title: 'Are you sure Delete?',
      text: 'You will not be able to recover this Record file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const index = this.company.indexOf(list);
        const url: string = this.urlConfig.deleteCompany;
        this.apiService.action(url, 'PUT', list).subscribe(
          (response) => {
            this.company.splice(index, 1);
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
