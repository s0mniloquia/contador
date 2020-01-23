import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number;

  constructor() {
    this.contador = 1;
  }

  incrementar = () => { this.contador++; };

  decrementar = () => { this.contador--; };
}
