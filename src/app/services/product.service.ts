import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product';
import { Observable, catchError, tap, throwError, map } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productUrl = 'assets/products_list.json';

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.objectID === id))
      );
  }

}
