import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: ['./padre.component.scss']
})
export class PadreComponent {

  contador: number;

  constructor() {
    this.contador = 1;
  }

  incrementar = () => { this.contador++; };

  decrementar = () => { this.contador--; };

}
