import { Component } from '@angular/core';
import { CartResponseDTO } from '../models/cart/cart-response-dto';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartResponseDTO[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.getAllCartItems().subscribe(data => {
      console.log(data);
       this.cartItems = data;
    });
  }



}
