import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreModule } from './components/familia-sin-redux/padre/padre.module';
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './components/familia-con-redux/contador.reducers';
import { PadreReduxModule } from './components/familia-con-redux/padre-redux/padre-redux.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PadreModule,
    PadreReduxModule,
    StoreModule.forRoot({contador: contadorReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
