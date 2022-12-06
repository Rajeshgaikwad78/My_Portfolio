import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { catchError, timeout } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient, private router: Router) { }
  public action(url: string, type: string, body = null): Observable<any> {

    url = environment.BASE_API_URL + url;
    let response: Observable<any> = null as any;
    let headerData: any = [];


    // tslint:disable-next-line:no-non-null-assertion
    const authorizationToken: any = localStorage.getItem('current_user')!;
    if (url.includes('user/userLogin') || url.includes('user/registerNewUser')) {
      headerData =
        new HttpHeaders({
          'Content-Type': 'application/json'
        });
      // tslint:disable-next-line:align
    } else {
      // tslint:disable-next-line:no-shadowed-variable
      headerData =
        new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: authorizationToken
        });
    }


    switch (type) {
      case 'GET':
        response = this.http.get<any>(url, { headers: headerData }).pipe(timeout(5000));
        break;
      case 'POST':
        // tslint:disable-next-line:max-line-length
        response = this.http.post<any>(url, body, { headers: headerData }).pipe(timeout(5000));
        break;
      case 'PUT':
        // tslint:disable-next-line:max-line-length
        response = this.http.put<any>(url, body, { headers: headerData }).pipe(timeout(5000));
        break;
    }
    return response;
  }

  // tslint:disable-next-line:typedef
  // private errorHandler(response: any) {
  //   const error = response.error;
  //   const keys = Object.keys(error);
  //   const key = keys[0];
  //   const message = error.message;
  //   const resStatus = response.status;
  //   if (resStatus === 401) {
  //     UserService.RemoveUser();
  //     this.router.navigate(['/login']);
  //     this.toastr.error('Session Expired', 'Error!');
  //   } if (key === 'isTrusted') {
  //     this.toastr.error('Please connect to internet Connection', 'Error!');
  //     // tslint:disable-next-line:align
  //   } if (resStatus === false) {
  //     this.toastr.error(message, 'Error!');
  //   } else {
  //     // this.alertService.error(message);
  //     this.toastr.error(message, 'Error!');
  //   }
  //   return throwError({ message, error });
  // }

}
