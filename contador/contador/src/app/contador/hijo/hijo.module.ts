import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo.component';
import { NietoModule } from '../nieto/nieto.module';



@NgModule({
  declarations: [HijoComponent],
  exports: [HijoComponent],
  imports: [
    CommonModule,
    NietoModule
  ]
})
export class HijoModule { }
