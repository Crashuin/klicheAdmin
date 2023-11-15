import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginPageComponent } from './page/login-page/login-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginBoxComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
