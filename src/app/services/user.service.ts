import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static authToken = 'current_user';
  private static fname = 'firstname';
  private static mname = 'middlename';
  private static lname = 'lastname';

  constructor() { }

  // tslint:disable-next-line:typedef
  static getUser(){
    return localStorage.getItem(UserService.authToken);
  }

  // tslint:disable-next-line:typedef
  static setUser(userData: any){
    localStorage.setItem(UserService.authToken, userData.token);
    localStorage.setItem(UserService.fname, userData.firstname);
    localStorage.setItem(UserService.mname, userData.midddlename);
    localStorage.setItem(UserService.lname, userData.lastname);
  }

  // tslint:disable-next-line:typedef
  static removeUser(){
    localStorage.removeItem(UserService.authToken);
    localStorage.removeItem(UserService.fname);
    localStorage.removeItem(UserService.mname);
    localStorage.removeItem(UserService.lname);



  }
}
