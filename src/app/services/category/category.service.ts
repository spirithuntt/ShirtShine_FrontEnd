import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponseDto } from 'src/app/models/category/category-response-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "http://localhost:8080/api/v1/category";

  constructor(private http:HttpClient) { }

  getAllCategories() {
    return this.http.get<CategoryResponseDto[]>(`${this.apiUrl}`);
  }

  createCategory(category: CategoryResponseDto) {
    return this.http.post<CategoryResponseDto>(`${this.apiUrl}`, category);
  }


  updateCategory(category: CategoryResponseDto) {
    console.log(`${this.apiUrl}/${category.id}`);
    return this.http.put<CategoryResponseDto>(`${this.apiUrl}/${category.id}`, category);
  }

  deleteCategory(id: number) {
    console.log(id);
    return this.http.delete<CategoryResponseDto>(`${this.apiUrl}/${id}`);
  }

  getCategoryById(id:Number){
    return this.http.get<CategoryResponseDto>(`${this.apiUrl}/${id}`);
  }
}
