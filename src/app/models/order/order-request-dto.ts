import { OrderItemRequestDTO } from './order-item-request-dto';
export interface OrderRequestDTO {
  fullName: string;
  email: string;
  phone: string;
  zipCode: number;
  address: string;
  status: string;
}
