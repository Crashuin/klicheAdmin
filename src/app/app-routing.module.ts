import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user/pages/user-page/user-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { CategoryPageComponent } from './category/pages/category-page/category-page.component';

const routes: Routes = [

  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'product',
    component: ProductPageComponent
  },
  {
    path: 'client',
    component: ClientPageComponent
  },
  {
    path: 'category',
    component: CategoryPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
