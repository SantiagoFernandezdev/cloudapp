import { Injectable } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
    providedIn: 'root'
})

export class BackgroundService {

    constructor(private background: BackgroundMode, private localNotif: LocalNotifications) {
        this.executeBackground();
    }

    executeBackground() {
        this.background.enable();
        this.background.on('activate').subscribe(() => {
            this.localNotif.schedule({
                id: 2,
                title: 'Hola Santiago!',
                text: 'Usted esta en modo Background',
                data: 'token',
                vibrate: true
            });
        });
    }
}
