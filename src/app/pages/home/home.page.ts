import { Login } from './../../interfaces/login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController, IonLabel, IonInput, IonButton, ToastController } from '@ionic/angular';
import { AccesoGuard } from '../../guards/acceso.guard';
import { PrincipalGuard } from '../../guards/principal.guard';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/DataAccess/Users/Authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: any = {
    user: '',
    password: ''
  };
  passwordType: string = 'password';
  passwordShow: boolean = false;

  recordar: any = {
    checked: false
  };
  users: any[] = [];
  red = true;
  constructor(public plt: Platform,
              public menuCtrl: MenuController,
              public navCtrl: NavController,
              private guard: AccesoGuard,
              private guardlogin: PrincipalGuard,
              private Authentication: AuthenticationService,
              private toast: ToastController,
              private route: Router) { }



  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'formularios');
  }


  onInfo() {
          this.Authentication.Authentication(this.login).subscribe((auth: any) => {
            if (auth.status) {
              this.guard.value = true;
              this.guardlogin.value = false;
              this.route.navigate(['/formularios', auth.tkn, auth.login]);
            } else {
              this.showToast(auth.text);
            }
        });
   }

   async showToast(msg: string) {
     const toast = await this.toast.create({
        message: msg,
        duration: 3000
     });
     toast.present();
   }


  showPassword() {
    if (this.passwordShow) {
      this.passwordShow = false;
      this.passwordType = 'password';
    } else {
      this.passwordShow = true;
      this.passwordType = 'text';
    }
  }

}
