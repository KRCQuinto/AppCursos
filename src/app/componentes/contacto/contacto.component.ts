import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  datos = {
    id: '',
    nombre: 'KevEdu User',
    email: 'ejemplo@email.com',
    mensaje:'Hola'
  };

  constructor(public servicio: ServicioService, private toastCtrl: ToastController) {}


  enviarMSJ () {
    this.servicio.editarPerfil(this.datos, 'Mensaje');
    console.log("Se envio correctamente");
    this.showToast("Mensaje enviado. Pronto nos comunicaremos con usted.");

  }

  showToast (message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(toastData => toastData.present());
  }

}
