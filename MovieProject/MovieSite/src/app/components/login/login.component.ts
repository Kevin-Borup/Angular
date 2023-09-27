import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: FormControl = new FormControl<string>('', Validators.required);
  password: FormControl = new FormControl<string>('', Validators.required);

  loginGroup: FormGroup = new FormGroup<any>({
    username: this.username,
    password: this.password
  });

  isFormValid(){
    return this.username.valid && this.password.valid;
  }

  onLoginSubmit() {
    if (this.isFormValid()){
      let user = this.username.value;
      let pass = this.password.value;


    }
  }
}
