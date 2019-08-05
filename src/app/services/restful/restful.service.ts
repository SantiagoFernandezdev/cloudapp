import { CONFIG } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {
     data: any = [];
     networkObservable: BehaviorSubject<any> = new BehaviorSubject<any>(true);
     constructor(private http: HttpClient) {
        }

     restAuth(fn, module , params) {
          let url = CONFIG.cloudEndPoint + module + '/' + fn + '?';
          url = url + 'login=' + params.user + '&password=' + params.password + '&lan=es';
          return  this.http.get(url);
     }

     restModule(fn, module , params) {
          let url = CONFIG.cloudEndPoint + module + '/' + fn + '?';
          url = url + 'tkn=' + params.token +
          '&key=FORMS' +
          '&id=' + params.id +
          '&f1=' + params.f1 +
          '&f2=' + params.f2 +
          '&f3=' + params.f3 +
          '&lan=es';
          return  this.http.get(url);
     }

}

