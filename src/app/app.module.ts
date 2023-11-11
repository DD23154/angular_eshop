import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsListComponent } from './products-list/products-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ContactFormComponent,
    ProductComponent,
    OrderComponent,
    OrdersListComponent,
    UserComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
