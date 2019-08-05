import { Component, OnInit } from '@angular/core';
import { SQLiteService } from 'src/app/services/dataSQLite/data-storage.service';
import { PrincipalGuard } from 'src/app/guards/principal.guard';
import { AccesoGuard } from 'src/app/guards/acceso.guard';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dataUser: any = {name: '', logo: ''};
  // tslint:disable-next-line:max-line-length
  constructor(private SQLiteservice: SQLiteService, private guardForm: AccesoGuard, private menuCtrl: MenuController) {
   }

  ngOnInit() {

  }

  async getdata() {
    if (this.dataUser.name === '' && this.dataUser.logo === '') {
      this.dataUser = await this.SQLiteservice.getData();
    }
  }

  closeSession() {
    this.SQLiteservice.closeSession().then(data => {
      if (data) {
        console.log(this.guardForm.value);
        this.dataUser = {name: '', logo: ''};
      }
    });
  }

}
