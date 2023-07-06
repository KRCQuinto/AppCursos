import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayComponent } from './play.component';
import { PlayRoutingModule } from './play-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayRoutingModule,
   
   

  ],
  declarations: [PlayComponent]
})
export class PlayModule { }