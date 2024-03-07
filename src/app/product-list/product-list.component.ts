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
}
