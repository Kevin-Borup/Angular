import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Login} from "../interfaces/login";
import {HttpClient} from "@angular/common/http";
import {Token} from "../interfaces/token";
import {SystemRole} from "./SystemRole";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = environment.config.apiUrl + "/api/Auth";
  endpointLogin: string = "/Login";

  private systemRoleSubject$: Subject<SystemRole> = new BehaviorSubject<SystemRole>(SystemRole.Unauthorized);
  systemRole$: Observable<SystemRole> = this.systemRoleSubject$.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  acquireToken(login: Login) {
    let role: string;
    let response = this.httpClient.post<Token>(this.url, login).subscribe(token => {
      if (token.key != null || token.key != undefined) {
        sessionStorage.setItem("token", token.key);

        this.systemRoleSubject$.next(SystemRole[token.systemRole as keyof typeof SystemRole]);
      }
    });
  }

  clearToken() {
    sessionStorage.removeItem("token");
    this.systemRoleSubject$.next(SystemRole.Unauthorized);
  }

  isAuthenticated() {
    return this.systemRole$.subscribe(role => {
      return role != SystemRole.Unauthorized;
    });
  }
}
