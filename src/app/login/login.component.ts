import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MustMatch } from '../helpers/must-match-validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  navbarOpen = false;
  registerForm: FormGroup;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  validation_messages = {
    email: [
      { type: 'required', message: 'Please enter your email' },
      { type: 'pattern', message: 'Please enter a valid email' },
    ],

    phoneNumber: [
      { type: 'required', message: 'Please enter your mobile number' },
      { type: 'minlength', message: 'Please enter 10 digit mobile number' },
    ],

    password: [
      { type: 'required', message: 'Please enter your password' },
      { type: 'minlength', message: 'Password must be 8 characters long' },
    ],
  };

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required])],
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  navbar = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }
  dropdown() {
    this.navbar = !this.navbar;

  }

  register(form) {
    if (this.registerForm.invalid) {
      return;
    }
    this.apiService.addNewUser(form).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isInputNumber(event: any) {

    const ch = String.fromCharCode(event.which);

    if (!(/[0-9]/.test(ch))) {
      event.preventDefault();
    }

  }

}
