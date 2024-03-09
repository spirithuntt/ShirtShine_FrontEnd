import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { CategoryResponseDto } from 'src/app/models/category/category-response-dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  category: CategoryResponseDto = {id: 0, name: ''};

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const categoryId = this.route.snapshot.params['id'];
    this.getCategory(categoryId);
  }

  getCategory(id: number): void {
    this.categoryService.getCategoryById(id).subscribe(
      data => {
        this.category = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    if (!this.category.name) {
      alert('Category name cannot be empty');
      return;
    }

    this.category.id = this.route.snapshot.params['id'];
    this.categoryService.updateCategory(this.category).subscribe(
      response => {
        this.router.navigate(['/category']);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
