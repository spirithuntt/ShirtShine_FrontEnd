import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseDTO } from 'src/app/models/product/product-response-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "http://localhost:8080/api/v1/product";

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get<ProductResponseDTO[]>(`${this.apiUrl}`);
  }

  getProductById(id: number) {
    return this.http.get<ProductResponseDTO>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: ProductResponseDTO) {
    return this.http.post<ProductResponseDTO>(`${this.apiUrl}`, product);
  }

  updateProduct(product: ProductResponseDTO) {
    return this.http.put<ProductResponseDTO>(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<ProductResponseDTO>(`${this.apiUrl}/${id}`);
  }


}
