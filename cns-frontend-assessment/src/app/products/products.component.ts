import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './types/product-types';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public error = {
    hasError: false,
    message: ''
  };
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.getProducts().pipe(
      catchError((error) => {
        // this would probably be better handled by sentry or some other error tracking service
        console.error(error);
        this.error = {
          hasError: true,
          message: 'An error occurred while fetching products'
        };
        return [];
      })
    ).subscribe((response) => {
      this.products = response.data.products;
    });
  }
}
