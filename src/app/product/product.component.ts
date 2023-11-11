import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product: Product | undefined;

  constructor(private activeRoute:ActivatedRoute, private productService:ProductService) { 
  }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('productID'));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product
    });
  }
}