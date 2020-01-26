import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoReduxComponent } from './hijo-redux.component';
import { NietoReduxModule } from '../nieto-redux/nieto-redux.module';



@NgModule({
  declarations: [HijoReduxComponent],
  exports: [HijoReduxComponent],
  imports: [
    CommonModule,
    NietoReduxModule
  ]
})
export class HijoReduxModule { }
