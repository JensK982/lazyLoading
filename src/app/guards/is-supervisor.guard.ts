import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";


export const isSupervisorGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return sessionStorage.getItem('user-role') === 'supervisor';
}