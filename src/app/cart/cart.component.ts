import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { CartResponseDTO } from 'src/app/models/cart/cart-response-dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems?: CartResponseDTO;
  totalPromotion: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getAllCartItems().subscribe((data: any) => {
      this.cartItems = data;
      this.totalPromotion = this.calculateAllPromotion();
    });
  }

  trackByFn(index: number, cartItem: any): number {
    return cartItem.id;
  }

  removeProductFromCart(id: number) {
    this.cartService.removeItemFromCart(id).subscribe((data: any) => {
      this.cartItems = data.products;
    });
  }

  updateQuantityInCart(id: number, quantity: number) {
    this.cartService.updateProductQuantity(id, quantity).subscribe((data: any) => {
      let item = this.cartItems?.cartItems.find(item => item.productId === id);
      if (item) {
        item.quantity = quantity;
        item.productTotalPrice = item.price * quantity * (item.promotion === 0 ? 1 : item.promotion / 100);
        this.updateCartTotals();
      }
    });
  }

  updateCartTotals() {
    this.calculateTotalPrice();
    this.totalPromotion = this.calculateAllPromotion();
    this.cartItems!.totalPriceWithPromotion = this.calculateTotalPriceWithPromotion();
  }

  calculateTotalPrice() {
    if (!this.cartItems?.cartItems) {
      this.cartItems!.totalPrice = 0;
    } else {
      this.cartItems.totalPrice = this.cartItems.cartItems.reduce((total, item) => {
        let itemTotalPrice = item.price * item.quantity;
        return total + itemTotalPrice;
      }, 0);
    }
  }

  calculateAllPromotion() : number {
    if (!this.cartItems?.cartItems) {
      return 0;
    }
    return this.cartItems.cartItems.reduce((total, item) => {
      return total + item.promotion;
    }, 0);
  }

  calculateTotalPriceWithPromotion() {
    if (!this.cartItems?.cartItems) {
      return 0;
    }
    return this.cartItems.cartItems.reduce((total, item) => {
      let itemTotalPriceWithPromotion = item.price * item.quantity * (1 - item.promotion / 100);
      return total + itemTotalPriceWithPromotion;
    }, 0);
  }
}
