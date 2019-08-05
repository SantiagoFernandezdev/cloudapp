import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
     providedIn: 'root'
})

export class LanguageService {
     selected = '';

     constructor(private translate: TranslateService, private plt: Platform) { }

     setInitialAppLanguage(language) {
       this.translate.setDefaultLang(language);
     }

     setLanguage(lng) {
       this.translate.use(lng);
       this.selected = lng;
     }
}
