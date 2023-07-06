import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CursoComponent } from './curso.component';
import { CursoRoutingModule } from './curso-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoRoutingModule,

   

  ],
  declarations: [CursoComponent]
})
export class CursoModule { }
