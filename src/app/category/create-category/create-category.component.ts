import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { CategoryResponseDto } from 'src/app/models/category/category-response-dto';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/Notification/notification.service';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  categoryName: CategoryResponseDto["name"]=''

constructor(private categoryService: CategoryService, private router: Router, private notificationService: NotificationService) { }
onSubmit() {
  // if (this.categoryName.trim() === '') {
  //   alert('Please enter a category name');
  //   return;
  // }
  this.categoryService.createCategory({name: this.categoryName} as CategoryResponseDto).subscribe({
    next: data => {
      this.router.navigate(['/category']);
      this.notificationService.show(['Category created successfully'], 'success');
    },
    error: err => {
      console.log(err);
      if (err.error) {
        this.notificationService.show([err.error.message], 'error');
      } else {
        console.log('Error with status: ' + err.status);
      }
    }
  });

  this.resetForm();
}

  resetForm() {
    this.categoryName = '';
  }
}
