import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product, ProductDetails } from './types/product-types';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  public loading = false;
  public selectedProduct: ProductDetails | null;
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
      this.products = response;
    });
  }
  public onCloseProductDetails(): void {
    this.selectedProduct = null;
  }
  public onProductClick(product: Product): void {
    this.selectedProduct = null;
    this.loading = true;
    this.service.getProductDetails(product.product_id).pipe(
      catchError((error) => {
        // this would probably be better handled by sentry or some other error tracking service
        console.error(error);
        this.error = {
          hasError: true,
          message: 'An error occurred while fetching product details'
        };
        return [];
      })
    ).subscribe((response) => {
      //Scroll to top of the page to show the product details
      window.scrollTo(0, 0);
      this.selectedProduct = response;
      this.loading = false;
    });
  }
}
