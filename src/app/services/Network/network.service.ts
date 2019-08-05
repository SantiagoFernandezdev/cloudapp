import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  statusNetwork: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private network: Network) {
    this.testingNetwork();
   }

  testingNetwork() {
    this.network.onDisconnect().subscribe(() => {
      const data = {status: false, type: 'none'};
      this.statusNetwork.next(data);
    });
    this.network.onConnect().subscribe(() => {
      const data = {status: true, type: ''};
      setTimeout(() => {
        data.type = this.network.type;
        this.statusNetwork.next(data);
      }, 3000);
    });

    if (this.network.type === 'none') {
      const data = {status: false, type: 'none'};
      this.statusNetwork.next(data);
    }
  }

  testNet(){
    return this.statusNetwork;
  }


}
