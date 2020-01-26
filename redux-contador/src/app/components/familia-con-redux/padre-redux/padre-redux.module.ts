import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreReduxComponent } from './padre-redux.component';
import { HijoReduxModule } from '../hijo-redux/hijo-redux.module';



@NgModule({
  declarations: [PadreReduxComponent],
  exports: [PadreReduxComponent],
  imports: [
    HijoReduxModule,
    CommonModule
  ]
})
export class PadreReduxModule { }
