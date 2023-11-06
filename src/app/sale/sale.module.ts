import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalePageComponent } from './pages/sale-page/sale-page.component';



@NgModule({
  declarations: [
    SalePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SalePageComponent
  ]
})
export class SaleModule { }
