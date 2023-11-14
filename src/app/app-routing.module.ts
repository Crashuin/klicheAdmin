import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user/pages/user-page/user-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ProductPageComponent } from './product/pages/product-page/product-page.component';
import { ClientPageComponent } from './client/pages/client-page/client-page.component';
import { CategoryPageComponent } from './category/pages/category-page/category-page.component';
import { SalePageComponent } from './sale/pages/sale-page/sale-page.component';
import { LoginPageComponent } from './auth/page/login-page/login-page.component';
import { DashboardPageComponent } from './shared/pages/dashboard-page/dashboard-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
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
        path: 'sale',
        component: SalePageComponent
      },

    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'notfound',
    component: Error404PageComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
