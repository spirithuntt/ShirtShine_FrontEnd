import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RoleComponent } from './role/role.component';
import { RoleResolver } from './resolver/role/role.resolver';
import { adminGuard } from './guard/admin/admin.guard';
import { authGuard } from './guard/auth/auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'super-admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'roles', component: RoleComponent, resolve: { roles: RoleResolver }, canActivate: [authGuard , adminGuard],},
  {path: 'products', component: ProductListComponent},
  {path: 'cart', component: CartComponent, canActivate: [authGuard] },
  {path: 'view-product/:id', component: ViewProductComponent},
  { path: 'category', component: CategoryListComponent, canActivate: [authGuard , adminGuard],},
  { path: 'create-category', component: CreateCategoryComponent, canActivate: [authGuard , adminGuard],},
  { path: 'update-category/:id', component: UpdateCategoryComponent, canActivate: [authGuard , adminGuard],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
