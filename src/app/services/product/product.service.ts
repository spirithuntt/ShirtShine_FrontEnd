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

  createProduct(product: ProductResponseDTO, image: File | Blob | null) {
    let formData = new FormData();

    if (image) {
      let imageName = 'image_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.png';
      formData.append('image', image, imageName);
    }

    formData.append('id', String(product.id));
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('category_id', String(product.category_id));
    formData.append('price', String(product.price));
    formData.append('stock', String(product.stock));
    formData.append('promotion', String(product.promotion));

    return this.http.post<ProductResponseDTO>(`${this.apiUrl}`, formData);
  }

  updateProduct(product: ProductResponseDTO, image: File | Blob | null) {
    let formData = new FormData();

    if (image) {
      let imageName = 'image_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.png';
      formData.append('image', image, imageName);
    }
    formData.append('id', String(product.id));
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('category_id', String(product.category_id));
    formData.append('price', String(product.price));
    formData.append('stock', String(product.stock));
    formData.append('promotion', String(product.promotion));

    return this.http.put<ProductResponseDTO>(`${this.apiUrl}/${product.id}`, formData);
  }

  deleteProduct(id: number) {
    return this.http.delete<ProductResponseDTO>(`${this.apiUrl}/${id}`);
  }

  searchProduct(query: string) {
    return this.http.get<ProductResponseDTO[]>(`${this.apiUrl}/search?query=${query}`);
  }


}
