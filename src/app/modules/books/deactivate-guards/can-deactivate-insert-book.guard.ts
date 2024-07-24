import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { InsertBookComponent } from "../pages/insert-book/insert-book.component";

export const canDeactivateInsertBook: CanDeactivateFn<InsertBookComponent> = 
(component: InsertBookComponent) => {
    if (!component.isDirty) {
        return true;
    }
    else {
        return confirm('You have unsaved changes. Do you really want to leave?');
    }
}