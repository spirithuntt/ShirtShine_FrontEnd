import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/Order/order.service';
import { OrderRequestDTO } from '../models/order/order-request-dto';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  orderRequestDTO: OrderRequestDTO = {} as OrderRequestDTO;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderRequestDTO.fullName = ''
    this.orderRequestDTO.email = '';
    this.orderRequestDTO.phone = '';
    this.orderRequestDTO.zipCode = 0;
    this.orderRequestDTO.address = '';
  }

  onCheckout() {
    this.orderService.completeCheckout(this.orderRequestDTO).subscribe(
      response => {
        this.orderRequestDTO = response;
            },
      error => {
        console.error(error);
      }
    );
}
}
