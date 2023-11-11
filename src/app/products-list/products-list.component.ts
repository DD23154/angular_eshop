import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
import { Observable, Subscription } from 'rxjs';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  sub!: Subscription;
  products: Product [] = [];
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      }
    });
  }

}
