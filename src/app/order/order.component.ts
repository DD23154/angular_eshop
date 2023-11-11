import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { User } from '../user';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  order: Order | undefined;
  user: User | undefined;
  products: Product[] | undefined;
  subtotalPrice: number = 0;
  shippingPrice: number = 0;
  totalBeforeTax: number = 0;
  estimatedTax: number = 0;
  grandTotal: number = 0;

  constructor(private activeRoute:ActivatedRoute, private orderService:OrderService, private userService:UserService) { 
  }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('orderID'));
    if (id) {
      this.orderService.getOrder(id).subscribe({
        next: (result: { order: Order; user: User; products: Product[] }) => {
          this.order = result.order;
          this.user = result.user;
          this.products = result.products;
          this.calculateTotalPrice();
          this.calculateShippingPrice();
          this.totalBeforeTax = this.subtotalPrice + this.shippingPrice;
          this.estimatedTax = this.totalBeforeTax*0.07;
          this.grandTotal = this.totalBeforeTax + this.estimatedTax;
        },
        error: (error) => {
          // Handle errors here
          console.error('Error:', error);
        }
      });
      
    }
  }

  calculateTotalPrice(): void {
    if (this.products) {
      this.subtotalPrice = this.products.reduce((total, product) => {
        return total + product.price;
      }, 0);
    }
  }

  calculateShippingPrice(): void {
    if (this.user?.country=="US") {
      this.shippingPrice=5;
    }
    else{ this.shippingPrice=15; }
  }

}