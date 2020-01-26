import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo-redux',
  templateUrl: './hijo-redux.component.html',
  styleUrls: ['./hijo-redux.component.scss']
})
export class HijoReduxComponent implements OnInit {

  contador: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador => this.contador = contador );
  }

  multiplicar = () => {
    const action: MultiplicarAction = new MultiplicarAction(2);
    this.store.dispatch(action);
  }

  dividir = () => {
    const action: DividirAction = new DividirAction(2);
    this.store.dispatch(action);
  }

}
