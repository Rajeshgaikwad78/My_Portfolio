import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logout() {
    UserService.removeUser();
    this.router.navigate(['/login']);
  }


}
