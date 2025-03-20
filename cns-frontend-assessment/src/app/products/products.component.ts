import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './types/product-types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((response) => {
      console.log(response);
      this.products = response.data.products;
    });
  }
}
