import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public client: any = [];
  private urlConfig: UrlConfig | any;

  constructor(private apiService: ApiserviceService, private route: ActivatedRoute) {
    this.urlConfig = new UrlConfig();
  }

  ngOnInit(): void {
    this.getAllClient();
  }

  // tslint:disable-next-line:typedef
  deleteClient(list: any){
    Swal.fire({
      title: 'Are you sure Delete?',
      text: 'You will not be able to recover this Record file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        const clientId = this.route.snapshot.params.clientId;
        const userId = this.route.snapshot.params.userId;
        const index = this.client.indexOf(list);
        const url: string = this.urlConfig.deleteClient + '/' + clientId + '/' + userId;
        this.apiService.action(url, 'PUT', list).subscribe(
          (response) => {
            this.client.splice(index, 1);
          });
        Swal.fire(
          'Deleted!',
          'Your Record file has been deleted.',
          'success'
        );
      }
    });

  }

  // tslint:disable-next-line:typedef
  getAllClient(){
    const url = this.urlConfig.getAllClients;
    this.apiService.action(url, 'GET').subscribe((response) => {
      this.client = response.data.allClientsData;
    })

  }

}
