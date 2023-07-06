import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor(public servis : ServicioService) { }
  personal:any;

  async ngOnInit() {

    this.servis.getDatosPersonal()
    .subscribe((data:any)=>{
      console.log(data)
      console.log('RECIBIDO')
      this.personal=data.results;
    })
  }


  

}
