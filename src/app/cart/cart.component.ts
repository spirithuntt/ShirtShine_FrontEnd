import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CartResponseDTO } from 'src/app/models/cart/cart-response-dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems?: CartResponseDTO[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getAllCartItems().subscribe((data: any) => {
       this.cartItems = data.products;
       console.log(data);
    });
  }

  trackByFn(index: number, cartItem: any): number {
    return cartItem.id; // Use a unique identifier for each item in your array
  }

  removeProductFromCart(id: number) {
    this.cartService.removeItemFromCart(id).subscribe((data: any) => {
      this.cartItems = data.products;
    });
  }
}
