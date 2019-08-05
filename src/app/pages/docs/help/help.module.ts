import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage,
    children: [
      {
        path: 'cloud',
        children: [
          {
            path: '',
            loadChildren: '../cloud/cloud.module#CloudPageModule',
          }
        ]
      },

      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: '../ini/ini.module#IniPageModule'
          }
        ]
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
