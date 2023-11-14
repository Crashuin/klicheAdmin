import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductPageComponent } from './pages/product-page/product-page.component';


//Angular material
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatButtonModule,
    // MatIconModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductModule { }
