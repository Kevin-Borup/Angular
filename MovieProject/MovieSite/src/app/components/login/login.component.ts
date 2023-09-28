import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Login} from "../../interfaces/login";
import {Router} from "@angular/router";

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

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  onLoginSubmit() {
    if (this.loginGroup.valid){
      let login: Login = { username: this.username.value, password: this.password.value};
      this.authService.acquireToken(login);
      this.router.navigate([''])
    }
  }
}
