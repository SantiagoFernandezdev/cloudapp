import { FormService } from './../../services/DataAccess/Forms/GetForms.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, AlertController, NavController, IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  @ViewChild('slide') Slide: IonSlides;
  @ViewChild('content') Content: IonContent;

  data: any = [];
  pages: any = [];
  pag: any = 1;
  save: any;
  infoPage: any;

  constructor(private menuCtrl: MenuController,
              private navCtrl: NavController,
              private Activeroute: ActivatedRoute,
              private Formservice: FormService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {

    await this.Formservice.getForm(this.Activeroute.snapshot.paramMap.get('id')).subscribe(data => {
      this.data.push(data.Name);
      this.pages = data.JSONquestion;
    });
  }

  ionViewDidEnter() {
    this.infoPage = this.pages[0].fie;
  }

  async cambio() {
   this.Content.scrollToTop(1);
   const i = await this.Slide.getActiveIndex();
   this.pag = i + 1;
   if(this.pag === this.pages.length) {
     this.save = true;
   } else {
     this.save = false;
   }
  }

  async nextSlide() {
    this.Content.scrollToTop(0);
    this.Slide.slideNext(300);
    const i = await this.Slide.getActiveIndex();
  }

  async prevSlide() {
    this.Content.scrollToTop(0);
    const i = await this.Slide.getActiveIndex();
    if (i === 0) {
      this.VTalert();
    } else {
      this.Slide.slidePrev(300);
    }
  }

  async VTalert() {
    const alert = await this.alertCtrl.create({
      header: 'Visitrack!',
      message: 'Esta se guro de salir del formulario',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: () => {
              this.navCtrl.back();
          }
        }
      ]
    });

    return await alert.present();
  }

  toggle() {
    this.menuCtrl.toggle('formularios');
  }
}
