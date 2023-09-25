import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Tune} from "../interfaces/tune";
import {HttpClient, HttpContext, HttpHeaders} from "@angular/common/http";
import {Account} from "../interfaces/account";
import {Token} from "../interfaces/token";

@Injectable({
  providedIn: 'root'
})
export class DragonApiService {
  private jwtToken: Token = {JWT: ""};
  private url: string = "https://localhost:7008";

  private endpointTunes = "/api/Tune/DragonTunes";
  private endpointSubmitNewTune = "/api/Tune/NewDragonTune";
  private endpointLogin = "/api/Authentication/Login";
  private endpointRegister = "/api/Authentication/NewDragon";

  constructor(private httpClient: HttpClient) {
  }

  fetchDragonTunes(): Observable<Tune[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.set("Authorization", "Bearer" + this.jwtToken);

    return this.httpClient.get<Tune[]>(this.url + this.endpointTunes, {headers});
  }

  submitNewDragonTune(newTune: Tune) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.set("Authorization", "Bearer" + this.jwtToken);

    let httpUrlParams: string = `?Name=${newTune.name}&Duration=${newTune.duration}`;
    let response = this.httpClient.post(this.url + this.endpointSubmitNewTune + httpUrlParams, "", {headers});
  }

  submitRegistration(newAccount: Account, role:string){
    console.log("submitReg");

    let httpUrlParams: string = `?Username=${newAccount.username}&Password=${newAccount.password}&role=${role}`;
    console.log("urlParams - " + httpUrlParams);

    this.httpClient.post(this.url + this.endpointRegister + httpUrlParams, "", {headers: {'Content-Type':'application/json; charset=utf-8'}}).subscribe((value) => {
      console.log(value);
    });

  }

  submitLogin(login: Account){
    let httpUrlParams: string = `?Username=${login.username}&Password=${login.password}`;
    let response: Observable<Token> = this.httpClient.get<Token>(this.url + this.endpointLogin + httpUrlParams);
    // this.jwtToken = response.
  }
}
