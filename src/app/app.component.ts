import { Globalization } from '@ionic-native/globalization/ngx';
import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkService } from './services/Network/network.service';
import { BackgroundService } from './services/Background/background.service';
import { SQLiteService } from './services/dataSQLite/data-storage.service';
import { LanguageService } from './services/Language/Languaje.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  status: boolean = false;
  messageStatus: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private network: NetworkService,
    private Background: BackgroundService,
    private SQLiteservice: SQLiteService,
    private glb: Globalization,
    private language: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#404040');
      this.splashScreen.hide();
      this.network.testNet().subscribe(data => {
        if (data.status === false) {
          this.status = true;
          this.messageStatus = 'No tiene acceso a internet';
        } else {
          this.status = false;
        }
      });

      this.glb.getPreferredLanguage().then(leng => {
        if (leng.value === 'es-ES') {
            this.language.setInitialAppLanguage('es');
        } else if (leng.value === 'en-US') {
            this.language.setInitialAppLanguage('en');
        } else {
            this.language.setInitialAppLanguage('es');
        }
      });
  });
  }

}
