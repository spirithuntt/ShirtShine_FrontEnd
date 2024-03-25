import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { NotificationService } from '../services/Notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role?: string;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private notificationService : NotificationService
    ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role;
    }
  }
  onSubmit(): void {
    const {
      email,
      password
    } = this.form;

    this.authService.login(email, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.role = this.storageService.getUser().role;
        this.reloadPage();
        this.notificationService.show(['You have been successfully logged in'], 'success');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.notificationService.show([err.error.message], 'error');

      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
