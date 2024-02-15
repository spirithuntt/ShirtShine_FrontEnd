import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = new Router;
   const storedRole = window.sessionStorage.getItem('auth-role');
   if (storedRole === 'SUPER_ADMIN' || storedRole === 'ADMIN') {
      return true;
   } else {
      router.navigate(['/home']);
     return false;
   }
};
