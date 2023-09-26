import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DragonApiService} from "../../services/dragon-api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hidePass: boolean = true;
  loginData: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private dragonApiService: DragonApiService) {
  }

  formValid(): boolean | undefined {
    return this.loginData.get('username')?.valid
      && this.loginData.get('password')?.valid;
  }

  onLoginSubmit() {
    console.log("loginSubmitStart");
    if (this.formValid()) {
      console.log("loginSubmitStart");

      let username: string = this.loginData.get('username')?.value;
      let password: string = this.loginData.get('password')?.value;

      this.dragonApiService.submitLogin({username: username, password: password});
    }
  }
}
