import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "./interfaces/car";
import {CarApiService} from "./services/car-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PopularFossilCars';
  cars: Car[] = []
  constructor(private carApi: CarApiService) {
    carApi.fetchAllCars().subscribe(
      (fetchedCars) => this.cars = fetchedCars
    );
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
