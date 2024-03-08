import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ProductResponseDTO } from 'src/app/models/product/product-response-dto';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: ProductResponseDTO = {
    id: 0,
    name: '',
    description: '',
    category_id: 0,
    price: 0,
    image: '',
    stock: 0,
    promotion: 0
  }
  categories: {id: number, name: string}[] = [];

  constructor(private productService: ProductService, private categoryService:CategoryService, private router: Router) { }
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  onSubmit() {
    if (!this.product.name || !this.product.description || !this.product.category_id || !this.product.price || !this.product.image || !this.product.stock || !this.product.promotion) {
      alert('Please fill all fields');
      return;
    }
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe({
      next: data => {
        this.router.navigate(['/product-dashboard']);
        console.log(data);
      },
      error: err => {
        console.log(err);
        if (err.error) {
          console.log(JSON.parse(err.error).message);
        } else {
          console.log('Error with status: ' + err.status);
        }
      }
    });
    console.log('Product Name:', this.product.name);

    this.resetForm();
  }

  resetForm() {
    this.product = {
      id: 0,
      name: '',
      description: '',
      category_id: 0,
      price: 0,
      image: '',
      stock: 0,
      promotion: 0
    }
  }
}
