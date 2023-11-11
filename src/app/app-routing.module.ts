import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'products-list', component: ProductsListComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'orders-list', component: OrdersListComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'product/:productID', component: ProductComponent },
  { path: 'user/:userID', component: UserComponent },
  { path: 'order/:orderID', component: OrderComponent },
  { path: '',   redirectTo: '/products-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
