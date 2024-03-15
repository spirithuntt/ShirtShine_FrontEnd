import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequestDTO } from 'src/app/models/order/order-request-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/v1/order';

  constructor(private http:HttpClient) { }


  completeCheckout(orderRequestDTO: OrderRequestDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/checkout`, orderRequestDTO);
  }

  getOrderByUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
