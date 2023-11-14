import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginPageComponent } from './page/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginBoxComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
