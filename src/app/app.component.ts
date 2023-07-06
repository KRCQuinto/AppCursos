import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Sesión', url: '/usuario', icon: 'person' },
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Cursos', url: '/curso', icon: 'school' },
    { title: 'Acerca de nosotros', url: '/acerca', icon: 'information-circle' },
    { title: 'Contacto', url: '/contacto', icon: 'mail' },
  ];

  nombreUsuario: string = '';

  constructor(public servicio: ServicioService) {}

  ngOnInit() {

  }


}

