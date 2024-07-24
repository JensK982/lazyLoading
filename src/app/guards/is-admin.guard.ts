import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const isAdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const hasPermission = sessionStorage.getItem('user-role') === 'admin';
  if (hasPermission) {
    return true;
  } else {
    router.navigate(['/error', '401']);
    return false;
  }
};
