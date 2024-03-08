import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { CategoryResponseDto } from 'src/app/models/category/category-response-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  category: CategoryResponseDto = {id: 0, name: ''};

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.category.name) {
      alert('Category name cannot be empty');
      return;
    }

    this.category.id = this.route.snapshot.params['id'];
    this.categoryService.updateCategory(this.category).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
