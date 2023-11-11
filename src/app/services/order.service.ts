import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Order } from '../order';
import { Observable, catchError, throwError, map, switchMap, forkJoin } from "rxjs";
import { UserService } from './user.service';
import { User } from '../user';
import { ProductService } from './product.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl = 'assets/orders_list.json';

  constructor(private http: HttpClient, private userService:UserService, private productService:ProductService) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  getOrder(id: number): Observable<{ order: Order, user: User, products: Product[] }> {
    return this.getOrders().pipe(
      switchMap((orders: Order[]) => {
        const order = orders.find(o => o.orderID === id);
        if (!order) {
          return throwError(()=>'Order not found');
        } else {
          const user$ = this.userService.getUser(order.userID);
          const productObservables$ = order.products.map((product: { productID: number }) => {
            return this.productService.getProduct(product.productID);
          });

          return forkJoin([user$, ...productObservables$]).pipe(
            map((data: (User | Product | undefined)[]) => {
              const user = data[0] as User;
              const products = data.slice(1) as Product[];
              return { order, user, products };
            }),
            catchError((error) => {
              // Handle any errors that occur during fetching product info
              return throwError(() => error);
            })
          ) as Observable<{ order: Order; user: User; products: Product[] }>;
        }
      }),
      catchError((error) => {
        // Handle any errors that occur during the process
        return throwError(() => error);
      })
    );
  }

}
