import { Component, OnInit } from '@angular/core';
import {UrlConfig} from '../../utility/url.config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../../services/apiservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;
  private urlConfig: UrlConfig;

  constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService, private router: Router) {
    this.urlConfig = new UrlConfig();

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }
    const url: string = this.urlConfig.registerNewUser;
    const body = this.registerForm.value;
    this.apiService.action(url, 'POST', body).subscribe((response) =>{
      // tslint:disable-next-line:triple-equals
      if (response == true ){
        this.router.navigate(['/login']);
        // tslint:disable-next-line:triple-equals
      }else if (response == false){
        this.router.navigate(['/forgot-password']);
      }
    });

  }

}
