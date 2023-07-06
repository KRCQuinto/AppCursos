import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
