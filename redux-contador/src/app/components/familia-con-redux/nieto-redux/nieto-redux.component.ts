import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto-redux',
  templateUrl: './nieto-redux.component.html',
  styleUrls: ['./nieto-redux.component.scss']
})
export class NietoReduxComponent implements OnInit {

  contador: number;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador => this.contador = contador );
  }

  reset = () => {
    const action: ResetAction = new ResetAction();
    this.store.dispatch( action );
  }

}
