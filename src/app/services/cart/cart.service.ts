import { Observable } from 'rxjs';
import { CartResponseDTO } from 'src/app/models/cart/cart-response-dto';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = "http://localhost:8080/api/v1/cart";


  constructor(private http: HttpClient) { }

  getAllCartItems(): any {
    const token = sessionStorage.getItem('auth-user');

    return this.http.get(`${this.apiUrl}`);
  }

  removeItemFromCart(id: number): any {
    return this.http.post(`${this.apiUrl}/remove/${id}`, null);
  }

  addProductToCart(id: number) {
    console.log(`${this.apiUrl}/add/${id}/1`);
    return this.http.post(`${this.apiUrl}/add/${id}/1`, null);
  }

}
