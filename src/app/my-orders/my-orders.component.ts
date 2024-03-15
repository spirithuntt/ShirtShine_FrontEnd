import { Component, OnInit } from '@angular/core';
import { OrderService } from './../services/Order/order.service';
import { OrderRequestDTO } from './../models/order/order-request-dto';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{

  orders: OrderRequestDTO[] = [];

  constructor(private orderService:OrderService ) { }

  ngOnInit():void {
    this.orderService.getOrderByUser().subscribe({
      next: data => {
        this.orders = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          console.log(JSON.parse(err.error).message);
        } else {
          console.log("Error with status: " + err.status);
        }
      }
    });
  }


}
