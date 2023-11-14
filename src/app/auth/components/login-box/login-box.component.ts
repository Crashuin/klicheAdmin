import { Component } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {

  public login: FormGroup|any;

  constructor(
    private _fb: FormBuilder,
    private router: Router
  ){

  }

  iniciarSesion(){
    this.router.navigate(['/dashboard/home']);
  }

  ngOnInit(): void {
    this.login = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.login.get('email') as FormControl;
  }

  get password() {
    return this.login.get('password') as FormControl;
  }


}
