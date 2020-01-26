import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoReduxComponent } from './nieto-redux.component';



@NgModule({
  declarations: [NietoReduxComponent],
  exports: [NietoReduxComponent],
  imports: [
    CommonModule
  ]
})
export class NietoReduxModule { }
