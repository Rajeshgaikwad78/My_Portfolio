import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../services/apiservice.service';
import {UrlConfig} from '../../utility/url.config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  private urlConfig: UrlConfig | any;
  public branch: any = [];

  constructor( private  apiService: ApiserviceService) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getAllBranches();
  }

  // tslint:disable-next-line:typedef
  getAllBranches(){
    const url = this.urlConfig.getAllBranches;
    this.apiService.action(url, 'GET').subscribe(
      (response) => {
        this.branch = response.data.allCompanyBranches;

      }
    );

  }
  // tslint:disable-next-line:typedef
  deleteBranch(list: any) {
    Swal.fire({
      title: 'Are you sure Delete?',
      text: 'You will not be able to recover this Record file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const index = this.branch.indexOf(list);
        const url: string = this.urlConfig.deleteCompanyBranch;
        this.apiService.action(url, 'PUT', list).subscribe(
          (response) => {
            this.branch.splice(index, 1);
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
