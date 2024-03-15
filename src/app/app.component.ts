import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private role?: string;
  private token?: string;
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  name?: string;
  ShowUserData = false;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.role = user.role;
      this.name = user.name;
      if (this.role === 'ADMIN') {
        this.showAdminBoard = true;
      }
      if (this.role === 'SUPER_ADMIN') {
        this.showSuperAdminBoard = true;
      }
      if (this.role === 'USER') {
        this.ShowUserData = true;
      }
    }
  }

logout(): void {
   this.authService.logout();
  this.router.navigate(['/login']);
}


}

