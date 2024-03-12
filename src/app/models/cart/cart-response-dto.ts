import { CartItemResponseDTO } from './cart-item-response-dto';
export interface CartResponseDTO {
  totalPrice: number;
  totalPriceWithPromotion: number;
  cartItems: CartItemResponseDTO[];
}
