import { FormService } from './../../services/DataAccess/Forms/GetForms.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoGuard } from 'src/app/guards/acceso.guard';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
})
export class FormulariosPage implements OnInit {
  user: string;
  forms: any;
  loading: any;
  constructor(private menuCtrl: MenuController,
              private ActiveRoute: ActivatedRoute,
              private formservice: FormService,
              private guard: AccesoGuard,
              private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
    this.menuCtrl.enable(true, 'formularios');
    // this.user = this.Active.snapshot.paramMap.get('user');
  }

  ionViewDidEnter() {
      this.cargarData();
  }

  cargarData() {
      console.log(this.ActiveRoute.snapshot.paramMap.get('login'));
      if(typeof this.forms === 'undefined') {
      this.presentLoading();
      const params = {
        token: this.ActiveRoute.snapshot.paramMap.get('token'), id: -1,
        f1: '', f2: '', f3: '', Login: this.ActiveRoute.snapshot.paramMap.get('login')
      };
      this.formservice.Form_Load(params).subscribe(forms => {
          this.forms = forms;
          this.loadingController.dismiss();
      });
     }
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Sincronizando'
    });
    return await this.loading.present();
  }

  build(item) {
    this.router.navigate(['/formulario', item.ID]);
  }


  toggle() {
    this.menuCtrl.toggle();
  }

  editar(item) {
    console.log(item);
  }

  eliminar(item) {
    console.log(item);
  }

}
