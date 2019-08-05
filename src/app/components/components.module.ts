import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextLineComponent } from './text-line/text-line.component';

@NgModule({
    declarations: [
        MenuComponent,
        TextLineComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule,
        TranslateModule
    ],
    exports: [
        MenuComponent,
        TextLineComponent
    ]
})

export class ComponentsModule {}
