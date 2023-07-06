import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/modelos/user.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent  implements OnInit {
  user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  async registrar (user: User) {
    if (this.formValidation()){
      let loader = await this.loadingCtrl.create({
        message: "Espere porfavor..."
      })
      await loader.present();
      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.pssw).then(data =>{
          console.log(data);
          this.navCtrl.navigateRoot('/login');
        })
      } catch (e:any){
        e.message = "Error al registrarse"
        let errorMessage = e.message || e.getlocalizedMessage();
        this.showToast(errorMessage);
      }
      await loader.dismiss();
    } 
  }
  formValidation(){
    if (!this.user.email) {
      this.showToast("Ingrese Email");
      return false;
    }
    if (!this.user.pssw) {
      this.showToast("Ingrese Contraseña");
      return false;
    }
    return true;
  }
  showToast (message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(toastData => toastData.present());
  }
}
