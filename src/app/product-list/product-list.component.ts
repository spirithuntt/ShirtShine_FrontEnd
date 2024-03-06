import { Component } from '@angular/core';
import { ProductResponseDTO } from '../models/product/product-response-dto';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products: ProductResponseDTO[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getAllProducts().subscribe(data => {
      console.log(data)

       this.products = data;
    });
  }
}
