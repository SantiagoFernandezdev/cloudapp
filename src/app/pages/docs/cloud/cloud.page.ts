import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, Platform, IonCol } from '@ionic/angular';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
})
export class CloudPage implements OnInit {

  @ViewChild('col') col: IonCol;
  lg = '12';
  constructor(private alert: AlertController, private plt: Platform) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.plt.is('desktop')) {
      this.lg = '4';
      console.log('bien');
     } else if (this.plt.is('android')) {
      this.col.sizeXs = '6';
      console.log('Deviced Android');
     } else {
       console.log('Nada');
     }
  }


  view() {
    this.preventAlert();
  }

  async preventAlert() {
    const alert = await this.alert.create({
      header: 'Visitrack!',
      message: 'Click en boton de opciones',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: (e) => {
              console.log(e);
          }
        }
      ]
    });

    return await alert.present();
  }

}
