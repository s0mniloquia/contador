import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre.component';
import { HijoModule } from '../hijo/hijo.module';



@NgModule({
  declarations: [PadreComponent],
  exports: [PadreComponent],
  imports: [
    CommonModule,
    HijoModule
  ]
})
export class PadreModule { }
