import { Component } from '@angular/core';
import { ProductResponseDTO } from '../models/product/product-response-dto';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
products?: ProductResponseDTO[] = [];
searchQuery!: string;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
       this.products = data;
    });

  }

  AddProductToCart(id: number, quantity: number) {
    this.cartService.addProductToCart(id, quantity).subscribe((data: any) => {
    }
    );
  }

  searchProduct() {
    this.productService.searchProduct(this.searchQuery).subscribe(
      data => {
        this.products = data;
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
}
}
