import { Component, OnInit } from '@angular/core';
import { ProductResponseDTO } from 'src/app/models/product/product-response-dto';
import { ProductService } from './../../services/product/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit{
  products?: ProductResponseDTO[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next: data => {
          this.products = data;
        },
        error: err => {console.log(err)
          if (err.error) {
            console.log(JSON.parse(err.error).message);
          } else {
            console.log("Error with status: " + err.status);
          }
        }
      });
    }

    deleteProduct(id: number) {
      this.productService.deleteProduct(id).subscribe({
        next: data => {
          this.products = this.products?.filter(product => product.id !== id);
        },
        error: err => {console.log(err)
          if (err.error) {
            console.log(JSON.parse(err.error).message);
          } else {
            console.log("Error with status: " + err.status);
          }
        }
    });
}
}
