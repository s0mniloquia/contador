import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { DecrementarAction, IncrementarAction } from '../contador.actions';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);

  }

  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);

  }

  decrementar() {
    const accion = new DecrementarAction();

    this.store.dispatch(accion);
  }


}
