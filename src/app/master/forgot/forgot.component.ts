import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup | any;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.forgotForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit(){

  }

}
