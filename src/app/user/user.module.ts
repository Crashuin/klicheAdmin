import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from '../shared/shared.module';

//Angular material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    UserPageComponent
  ]
})
export class UserModule { }
