import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from "../../interfaces/car";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {
  @Input() cars!: Car[];
  @Output() carsChange =
    new EventEmitter<Car[]>();

  newCarDataGroup: FormGroup;
  modelControl: FormControl = new FormControl<string>('', Validators.required);
  countControl: FormControl = new FormControl<number>(0, Validators.required);
  adjustmentControl: FormControl = new FormControl<number>(0, Validators.required);

  constructor() {
    this.newCarDataGroup = new FormGroup<any>({
      model: this.modelControl,
      count: this.countControl,
      adjustment: this.adjustmentControl
    });
  }


  formValid() {
    return this.modelControl.valid && this.countControl.valid && this.adjustmentControl.valid;
  }

  onSubmitCar() {
    if (this.formValid()) {
      let model: string = this.modelControl.value.text;
      let count: number = this.countControl.value;
      let adjustment: number = this.adjustmentControl.value;
      let newCar: Car = {model, count, adjustment};

      this.cars.push(newCar);

      this.carsChange.emit(this.cars);
    }
  }
}
