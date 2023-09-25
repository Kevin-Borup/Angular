import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DragonApiService} from "../../services/dragon-api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hidePass: boolean = true;
  roles: string[] = ["Listener", "Creator"];


  registrationData: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  roleControl = new FormControl<string | null>(null, Validators.required);


  constructor(private dragonApiService: DragonApiService) {
  }

  formValid(): boolean | undefined {
    return this.registrationData.get('username')?.valid
      && this.registrationData.get('password')?.valid
      && this.roleControl.valid;
  }

  onRegistrationSubmit() {
    console.log("registrationSubStart");

    if(this.formValid()){
      console.log("registrationSubValid");

      let username: string = this.registrationData.get('username')?.value;
      let password: string = this.registrationData.get('password')?.value;
      let role = this.roleControl.value?.toString();

      if (role === undefined){
        role = "Listener";
      }

      this.dragonApiService.submitRegistration({username: username, password: password}, role);
    }
  }
}
