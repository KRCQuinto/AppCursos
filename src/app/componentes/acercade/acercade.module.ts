import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AcercadeComponent } from './acercade.component';
import { AcercaRoutingModule } from './acercade-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaRoutingModule,

   

  ],
  declarations: [AcercadeComponent]
})
export class AcercaModule { }