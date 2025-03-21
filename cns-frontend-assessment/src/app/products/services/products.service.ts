import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product, ProductDetails } from '../types/product-types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Public API endpoint to retrieve require data (provided headers need to be included in request)
  private url: string = 'https://localhost:4200/api';
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json',  'x-v': '3' });

  constructor(private http: HttpClient) { }

  // code to make http request should be contained in here
  public getProducts(): Observable<Product[]> {
   return this.http.get<Product[]>(`${this.url}/products`, { headers: this.headers });
  }
  public getProductDetails(id: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`${this.url}/productDetails/${id}`, { headers: this.headers });
   }
}
