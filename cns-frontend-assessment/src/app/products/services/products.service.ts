import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductNetworkResponse } from '../types/product-types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Public API endpoint to retrieve require data (provided headers need to be included in request)
  private url: string = 'https://localhost:4200/products';
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json',  'x-v': '3' });

  constructor(private http: HttpClient) { }

  // code to make http request should be contained in here
  public getProducts(): Observable<ProductNetworkResponse> {
   return this.http.get<ProductNetworkResponse>(this.url, { headers: this.headers });
  }
}
