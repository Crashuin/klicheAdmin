import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './pages/category-page/category-page.component';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryPageComponent
  ]
})
export class CategoryModule { }
