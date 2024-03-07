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

}
