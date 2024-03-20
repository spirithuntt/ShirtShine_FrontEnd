import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseDTO } from '../../models/product/product-response-dto';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: ProductResponseDTO = {
    id: 0,
    name: '',
    description: '',
    category_id: 0,
    price: 0,
    image: null,
    stock: 0,
    promotion: 0
  };
  categories: any[] = [];
  constructor(private http: HttpClient, private productService:ProductService, private categoryService:CategoryService) {}

  ngOnInit() {
    // Fetch categories when the component is initialized
    this.categoryService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    }
    );
  }

  createProduct() {
    this.productService.createProduct(this.product, this.product.image).subscribe((data: any) => {
      console.log(data);
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.product.image = file;
    }
  }
}
