import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PipeTesting';
  numbers: number[] = [
    1, 2, 45, 23.4, 1234.1, 2313.44, 5345.4546
  ]
}
