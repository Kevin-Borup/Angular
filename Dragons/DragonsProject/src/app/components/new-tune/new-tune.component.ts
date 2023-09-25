import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DragonApiService} from "../../services/dragon-api.service";

@Component({
  selector: 'app-new-tune',
  templateUrl: './new-tune.component.html',
  styleUrls: ['./new-tune.component.css']
})
export class NewTuneComponent {
  newTuneData: FormGroup = new FormGroup({
    tuneName: new FormControl('', Validators.required),
  })

  timeMinControl = new FormControl<number | null>(null, Validators.required);
  timeSecControl = new FormControl<number | null>(null, Validators.required);

  timeTicks: number[] = [...Array(60).keys()];

  constructor(private dragonApiService: DragonApiService) {
  }

  formValid(): boolean | undefined {
    return this.newTuneData.get('tuneName')?.valid
      && this.timeMinControl.valid
      && this.timeSecControl.valid;
  }

  onNewTuneSubmit() {
    if(this.formValid()){
      let tuneName: string = this.newTuneData.get('tuneName')?.value;

      let minValue = this.timeMinControl.value?.toString();
      let secValue = this.timeSecControl.value?.toString();

      if (minValue === undefined) {
        minValue = "00";
      }
      if (secValue === undefined) {
        secValue = "00";
      }

      let tuneDuration: string = minValue + ":" + secValue;

      this.dragonApiService.submitNewDragonTune({name: tuneName, duration: tuneDuration})
    }
  }
}
