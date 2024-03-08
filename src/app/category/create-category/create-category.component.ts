import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { CategoryResponseDto } from 'src/app/models/category/category-response-dto';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  categoryName: CategoryResponseDto["name"]=''

constructor(private categoryService: CategoryService) { }
onSubmit() {
  if (this.categoryName.trim() === '') {
    alert('Please enter a category name');
    return;
  }
  //create category from service
  this.categoryService.createCategory({name: this.categoryName} as CategoryResponseDto).subscribe({
    next: data => {
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
  console.log('Category Name:', this.categoryName);

  this.resetForm();
}

  resetForm() {
    this.categoryName = '';
  }
}
