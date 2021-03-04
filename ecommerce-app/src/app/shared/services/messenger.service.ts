import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

behaviourSubject = new BehaviorSubject(null);

  constructor() { }

  sendMsg(product:any){
    console.log(product);
    this.behaviourSubject.next(product);
  }

  getMsg(){
    return this.behaviourSubject.asObservable();
  }
}
