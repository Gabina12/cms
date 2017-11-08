import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';
import { RefundTransacionObject } from '../models/RefundTransacionObject';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class OrdersService {

  constructor(public http: Http) { }

  getOrders() {
    return this.http.get(`/api/Orders`, options).map(res => res.json());
  }

  deleteOrder(id: number){
    return this.http.delete('/api/Orders/' + id, options).map(res => res.json());
  }
  
  RefundOrder(transObj: RefundTransacionObject){
    return this.http.post('/api/TbcPayments/RefundTransaction',transObj, options).map(res => res.json());
  }

  ReversalOrder(transObj: RefundTransacionObject){
    return this.http.post('/api/TbcPayments/ReversalTransaction',transObj, options).map(res => res.json());
  }

  EndDay(){
    return this.http.post('/api/TbcPayments/EndBusinessDay',null, options).map(res => res.json());
  }
}
