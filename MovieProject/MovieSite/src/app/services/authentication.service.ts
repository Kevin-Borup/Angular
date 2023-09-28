import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {Movie} from "../interfaces/movie";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Login} from "../interfaces/login";
import {HttpClient} from "@angular/common/http";
import {Token} from "../interfaces/token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = environment.config.apiUrl + "/api/Auth";
  endpointLogin: string = "/Login";

  private authenticatedSubject$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  authenticated$: Observable<boolean> = this.authenticatedSubject$.asObservable();

  private test1: boolean = false;
  private test2: string = "";

  constructor(private httpClient: HttpClient) {
  }

  acquireToken(login: Login) {
    let response = this.httpClient.post<Token>(this.url, login).subscribe(token => {
      if (token.key != null || token.key != undefined) {
        sessionStorage.setItem("token", token.key);
        this.authenticatedSubject$.next(true);
      }
    });
  }

  clearToken() {
    sessionStorage.removeItem("token");
    this.authenticatedSubject$.next(false);
  }
}
