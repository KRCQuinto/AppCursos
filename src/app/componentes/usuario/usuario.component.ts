import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  imagenPerfil = 'https://i1.wp.com/www.onlineowls.com/wp-content/uploads/2015/10/ONLINE_OWL1-e1446515402776.png?fit=200%2C200&ssl=1';
  fileSeleccionado: File | null = null;
  mensajeServidor: string = '';

  constructor() {}

  ngOnInit() {}


}



