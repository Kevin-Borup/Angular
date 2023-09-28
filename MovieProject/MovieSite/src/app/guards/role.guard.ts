import {CanActivateFn, Router, RoutesRecognized} from '@angular/router';
import {filter, pairwise} from "rxjs";
import {Inject, inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {SystemRole} from "../services/SystemRole";

export const roleGuard: CanActivateFn = (route, state) => {
    let authService = inject(AuthenticationService);
    let router = inject(Router);

    let authenticated = authService.isAuthenticated();
    console.log(authenticated);
    if (authenticated) {
        const requiredRole = SystemRole[route.data['requiredRole'] as keyof typeof SystemRole];
        console.log(requiredRole);
        let currentRole: SystemRole = SystemRole.Unauthorized;

        authService.systemRole$.subscribe(role => {
            currentRole = role;
        })

        console.log(currentRole);
        console.log(currentRole == requiredRole);
        console.log(currentRole.valueOf());
        console.log(requiredRole.valueOf());

        if (currentRole >= requiredRole) return true;
        if (currentRole.valueOf() < requiredRole.valueOf()) { // Roles under the value are redirected to their previous URL
            router.events
                .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
                .subscribe((events: RoutesRecognized[]) => {
                    router.navigate([events[0].urlAfterRedirects]);
                    return false;
                });
        }
    }

    return false; //Unauthorized are blocked
}
