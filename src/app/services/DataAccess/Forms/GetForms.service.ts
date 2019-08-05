import { Injectable } from '@angular/core';
import { RestfulService } from '../../restful/restful.service';
import { Subject } from 'rxjs';
import { SQLiteService } from '../../dataSQLite/data-storage.service';
import { async } from 'q';

@Injectable({
     providedIn: 'root'
})

export class FormService {
     forms: Subject<any> = new Subject();
     formData: Subject<any> = new Subject();
     constructor(private restful: RestfulService, private SQLiteservice: SQLiteService) { }

      Form_Load(params) {
          this.SQLiteservice.comprobarForm(params.Login).then(status => {
               console.log(status);
               this.restful.restModule('GetModuleInfo', 'Mobile', params).subscribe(data  => {
                    const convertData = JSON.parse(data.toString());
                    const FormsData = [];
                    for (const element of convertData) {
                          if (element.isDeleted === 'False' || element.isDeleted === false) {
                               const data = {
                                   ID: element.ID,
                                   Name: element.Name,
                                   Guid: element.GUID,
                                   hasAsset: element.hasAsset,
                                   JSONQuestions: element.JSONQuestions,
                                   Login: params.Login,
                                   Description: element.Description
                               };
                               if (status) {
                                    this.SQLiteservice.updateDataFrom(data);
                               } else {
                                    this.SQLiteservice.saveDataFrom(data);
                               }
                               FormsData.push(element);
                         }
                    }
                    this.forms.next(FormsData);
               });
          });

          return this.forms;
     }

     getForm(id) {
          this.SQLiteservice.getFormData(id).then((datos: any) => {
               this.formData.next(datos);
          }).catch((e) => {
               console.log(e);
          });

          return this.formData;
     }
}
