import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const adminRoleResolver: ResolveFn<string> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return 'admin';
}