import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartResponseDTO } from 'src/app/models/cart/cart-response-dto';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = "http://localhost:8080/api/v1/cart";


  constructor(private http:HttpClient) { }

  getAllCartItems() : Observable<CartResponseDTO[]> {
    const token = sessionStorage.getItem('auth-user');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get<CartResponseDTO[]>(`${this.apiUrl}`, { headers });
  }

}
