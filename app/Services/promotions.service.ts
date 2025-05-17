import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromitionsService {
  ads: string[] = [
    'Buy 2 Get 1',
    'discount over 50 %',
    'Discount over 20%',
    '',
    'free ticket',
  ];
  constructor() {}

  getCurrentAd(): Observable<string> {
    let observable = new Observable<string>((observer) => {
      let count = 0;
      let myIntervale = setInterval(() => {
        observer.next(this.ads[count++]);
        if (this.ads.length == count) {
          observer.complete();
        }

        if (this.ads[count] == '') {
          observer.error('Empty Add');
        }

      }, 3000);


      return {
        unsubscribe() {
          console.log('unsubscribe');
          clearInterval(myIntervale);
        },
      };
      
    });

    return observable;
  }
}