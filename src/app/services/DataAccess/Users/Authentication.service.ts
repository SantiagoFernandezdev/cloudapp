import { Injectable } from '@angular/core';
import { RestfulService } from '../../restful/restful.service';
import { SQLiteService } from '../../dataSQLite/data-storage.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
     providedIn: 'root'
})

export class AuthenticationService {
     respSql: Subject<any> = new Subject<any>(); // observable que recibe el estado de sqlite

     constructor(private restFul: RestfulService, private SQLiteservice: SQLiteService, private network: Network) { }

     Authentication(login) {
          if (this.network.type !== 'none') {
          this.restFul.restAuth('Authentication', 'Users', login).subscribe((data: any) => {
               let resData: any = {}; // variable de retorno por el observable 

               const convertData = JSON.parse(data.toString());
               convertData.pass = login.password;
               convertData.lg = login.user;
               const token = convertData.AccessToken;
               if (typeof token !== 'undefined') {
                    this.SQLiteservice.agregarData(convertData).then((query: any) => {
                         if (query.status) {
                              resData = {status: true, text: query.text, tkn: token, login: convertData.Login};
                              this.respSql.next(resData);
                         } else {
                              resData = {status: false, text: 'Mado false'};
                              this.respSql.next(resData);
                         }
                    }).catch(e => {
                         resData = {status: false, text: 'Error en la autenticacion de usuario en sqlite'};
                         this.respSql.next(resData);
                    });
                } else {
                    resData = {status: false, text: 'Credenciales incorrectas'};
                    this.respSql.next(resData);
                }
          });
          } else {
               console.log('Activar el sqlite');
          }

          return this.respSql;
     }

}
