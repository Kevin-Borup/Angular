import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "../../interfaces/car";

@Component({
  selector: 'app-car-showcase',
  templateUrl: './car-showcase.component.html',
  styleUrls: ['./car-showcase.component.css']
})
export class CarShowcaseComponent {
  @Input() cars!: Car[];
  @Output() carsChange =
    new EventEmitter<Car[]>();

  displayedColumns: string[] = ['model', 'count', 'adjustment', 'delete'];

  deleteCar(carValue: any){
    let car = carValue as Car;
    this.cars.filter(value => this.compareCar(value, car)).pop();
    this.carsChange.emit(this.cars);
  }

  compareCar(carA: Car, carB: Car) {
    return carA.model == carB.model && carA.count == carB.count && carA.adjustment == carB.adjustment;
  }



}
