import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UrlConfig} from '../../utility/url.config';
import {ApiserviceService} from '../../services/apiservice.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  private urlConfig: UrlConfig;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService, private router: Router) {
    this.urlConfig = new UrlConfig();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.loginForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const url = this.urlConfig.userLogin;
    const body = this.loginForm.value;
    this.apiService.action(url, 'POST', body).subscribe((response) => {
      this.router.navigate(['']);
      UserService.setUser(response.data.userData);
    });
  }

}
