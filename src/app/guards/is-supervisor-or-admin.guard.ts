import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";


export const isSupervisorOrAdminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return sessionStorage.getItem('user-role') === 'supervisor' ||
    sessionStorage.getItem('user-role') === 'admin';
}