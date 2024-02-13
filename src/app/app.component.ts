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
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showSuperAdminBoard = false;
  name?: string;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
       const user = this.storageService.getUser();
      // this.roles = user.roles;
      // this.showAdminBoard = this.roles.includes('ADMIN');
      // this.showSuperAdminBoard = this.roles.includes('SUPER_ADMIN');

      // this.name = user.name;
    }
  }

logout(): void {
   this.authService.logout();
  this.router.navigate(['/login']);
}


}

