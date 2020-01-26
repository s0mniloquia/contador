import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoModule } from '../nieto/nieto.module';
import { HijoModule } from '../hijo/hijo.module';
import { PadreComponent } from './padre.component';



@NgModule({
  declarations: [PadreComponent],
  exports: [PadreComponent],
  imports: [
    CommonModule,
    HijoModule
  ]
})
export class PadreModule { }
