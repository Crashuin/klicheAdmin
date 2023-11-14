import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ClientModule } from './client/client.module';
import { SaleModule } from './sale/sale.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    UserModule,
    ProductModule,
    CategoryModule,
    ClientModule,
    SaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
