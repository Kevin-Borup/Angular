import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../interfaces/car";

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor(private httpClient: HttpClient) { }

  fetchAllCars() {
    return this.httpClient.get<Car[]>("http://localhost:3030/api/cars");
  }
}
