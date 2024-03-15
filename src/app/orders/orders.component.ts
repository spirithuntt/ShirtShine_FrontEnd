import { Component, OnInit } from '@angular/core';
import { OrderService } from './../services/Order/order.service';
import { OrderRequestDTO } from './../models/order/order-request-dto';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders:OrderRequestDTO[] = [];

    constructor(private orderService:OrderService) { }

    ngOnInit(): void {
      this.orderService.getAllOrders().subscribe({
        next: data => {
          this.orders = data;
          console.log(this.orders);
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
