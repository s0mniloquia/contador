import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NietoComponent } from './nieto.component';



@NgModule({
  declarations: [NietoComponent],
  exports: [NietoComponent],
  imports: [
    CommonModule
  ]
})
export class NietoModule { }
