import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { ProductResponseDTO } from 'src/app/models/product/product-response-dto';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
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

  categories: {id: number, name: string}[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private categoryService:CategoryService, private router: Router) { }

  ngOnInit(){
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });

    const productId = this.route.snapshot.params['id'];
    this.getProduct(productId);
  }

  getProduct(id: number): void {
    this.productService.getProductById(id).subscribe(
      data => {
        this.product = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    if (!this.product.name || !this.product.description || !this.product.category_id || !this.product.price || !this.product.image || !this.product.stock || !this.product.promotion) {
      alert('All fields must be filled');
      return;
    }

    this.product.id = this.route.snapshot.params['id'];



    this.productService.updateProduct(this.product, this.product.image).subscribe(
      response => {
        this.router.navigate(['/product-dashboard']);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.product.image = file;
    }
  }
}
