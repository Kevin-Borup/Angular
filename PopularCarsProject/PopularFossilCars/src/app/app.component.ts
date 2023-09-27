import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "./interfaces/car";
import {CarApiService} from "./services/car-api.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PopularFossilCars';


  constructor(private carApi: CarApiService) {


    carApi.fetchAllCars().subscribe(car => {
      this.cars$.next(car);
    });
  }

  displayedColumns: string[] = ['model', 'count', 'adjustment', 'delete'];

  deleteCar(carValue: any){
    let car = carValue as Car;
    this.cars.filter(value => this.compareCar(value, car)).pop();
  }

  compareCar(carA: Car, carB: Car) {
    return carA.model == carB.model && carA.count == carB.count && carA.adjustment == carB.adjustment;
  }
}
