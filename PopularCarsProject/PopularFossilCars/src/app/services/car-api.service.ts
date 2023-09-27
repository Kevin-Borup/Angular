import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../interfaces/car";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private cars: Car[] = [];
  private carSubjects$: Subject<Car[]> = new BehaviorSubject<Car[]>(this.cars);
  cars$: Observable<Car[]> = this.carSubjects$.asObservable();

  constructor(private httpClient: HttpClient) { }

  fetchAllCars() {
    this.httpClient.get<Car[]>("http://localhost:3030/api/Car/AllCars").subscribe( car => {
      this.carSubjects$.next(car);
    });
  }

  insertCar(car: Car){
    this.carSubjects$
  }
}
