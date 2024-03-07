import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductResponseDTO } from '../models/product/product-response-dto';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  product?: ProductResponseDTO;

  constructor(private productService: ProductService, private route: ActivatedRoute, private CartService: CartService) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(Number(productId)).subscribe((data: any) => {
      this.product = data;
    }
    );
  }

  AddProductToCart(id: number, quantity: number) {
    this.CartService.addProductToCart(id, quantity).subscribe((data: any) => {
    }
    );
  }
}
