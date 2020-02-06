import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {


  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.authService.login(this.f.email.value, this.f.password.value)
      .subscribe(
        (res) => {
          console.log('Login Successfull');
          localStorage.setItem('token', res.body.token);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
