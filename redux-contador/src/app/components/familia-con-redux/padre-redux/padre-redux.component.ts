import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { IncrementarAction, DecrementarAction } from '../contador.actions';

@Component({
  selector: 'app-padre-redux',
  templateUrl: './padre-redux.component.html',
  styleUrls: ['./padre-redux.component.scss']
})
export class PadreReduxComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  incrementar = () => {
    const action: IncrementarAction = new IncrementarAction();
    this.store.dispatch( action );
  }

  decrementar = () => {
    const action: DecrementarAction = new DecrementarAction();
    this.store.dispatch( action );
  }

}
