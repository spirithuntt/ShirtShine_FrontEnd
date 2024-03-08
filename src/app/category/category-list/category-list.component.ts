import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryResponseDto } from 'src/app/models/category/category-response-dto';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories?: CategoryResponseDto[] = [];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: data => {
        this.categories = data;
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

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe({
      next: data => {
        this.categories = this.categories?.filter(category => category.id !== id);

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
