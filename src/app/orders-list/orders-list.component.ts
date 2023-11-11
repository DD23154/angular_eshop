import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Subscription, finalize } from 'rxjs';
import { Order } from '../order';
import { ProductService } from '../services/product.service';
import { Product } from '../product';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  sub!: Subscription;
  orders: Order[] = [];

  constructor(private orderService: OrderService, private productService: ProductService){}

  ngOnInit(): void {
    this.sub = this.orderService.getOrders().subscribe({
      next: orders => {
        this.orders = orders;
        this.calculateTotalPrices();
        
      }
    });
  }

  calculateTotalPrices(): void {
    this.orders.forEach((order : Order) => {
      let totalPrice = 0;
      order.products.forEach((product : any) => {
        this.productService.getProduct(product.productID).subscribe({
          next: (fetchedProduct: Product | undefined) => {
            if (fetchedProduct) {
              totalPrice += fetchedProduct.price;
              order.totalPrice= totalPrice;
            }
          },
          error: (error) => {
            // Handle errors here
            console.error('Error fetching product:', error);
          }
        });
      });
    });
  }

}
