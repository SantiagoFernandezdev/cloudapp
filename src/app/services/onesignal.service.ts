import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class OnesignalService {

  constructor(private oneSignal: OneSignal) { }

  configuracioInicial() {
    this.oneSignal.startInit('d5dc8716-331e-4150-b375-e0f7c43bd176', '954770608713');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
     // do something when notification is received
     console.log('Notificación recibida');
     console.log(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('Notificación abierta');
      console.log(noti);
    });
    this.oneSignal.endInit();
  }
}
