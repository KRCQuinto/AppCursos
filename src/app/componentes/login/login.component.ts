import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from 'src/app/modelos/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
user = {} as User;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}
  async login (user: User) {
    if (this.formValidation()){
      let loader = await this.loadingCtrl.create({
        message: "Espere porfavor..."
      })
      await loader.present();
      try {
        await this.afAuth.signInWithEmailAndPassword(user.email, user.pssw).then(data =>{
          console.log(data);
          this.showToast("Bienvenido a KevEdu");
          this.navCtrl.navigateRoot('/inicio');
         
        })
      } catch (e:any){
        e.message = "Error al iniciar sesion"
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
