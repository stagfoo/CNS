import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      console.log(data);
    });
  }
}
