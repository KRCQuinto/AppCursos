import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public URL="miempresaraulquinto00.com/";
  private nombreUsuario : string = '';
  

  constructor(public route : Router,private http:HttpClient, private fire:AngularFirestore, private storage: AngularFireStorage) { }

  navegarA(url: string)
{
  this.route.navigateByUrl(url);
}

editarPerfil<modelo>(datos:modelo,coleccion:string){
  const item: AngularFirestoreCollection<modelo>=
      this.fire.collection<modelo>(coleccion);
  return item.add(datos);
  }

 


  

getDatosCursos()
  {
    return this.http.get("http://miempresaraulquinto00.com/ofertas?select=*");
  }
  getDatosPersonal()
  {
    return this.http.get("http://miempresaraulquinto00.com/personal?select=*");
  }

  postDatos(tabla:string,datos:any)
  {
    return this.http.post(this.URL+"?tabla="+tabla,datos)
  }

  postrestinv(datos:any)
  {
    return this.http.post(this.URL+"?accion=restInv",datos)
  }
}