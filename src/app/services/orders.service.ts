import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Orders } from '../models/orders';
import { RefundTransacionObject } from '../models/RefundTransacionObject';

@Injectable()
export class OrdersService {

  constructor(public http: Http) { }

  getOrders() {
    return this.http.get(`/api/Orders`).map(res => res.json());
  }

  deleteOrder(id: number){
    return this.http.delete('/api/Orders/' + id).map(res => res.json());
  }
  
  RefundOrder(transObj: RefundTransacionObject){
    return this.http.post('/api/TbcPayments/RefundTransaction',transObj).map(res => res.json());
  }

  ReversalOrder(transObj: RefundTransacionObject){
    return this.http.post('/api/TbcPayments/ReversalTransaction',transObj).map(res => res.json());
  }

  EndDay(){
    return this.http.post('/api/TbcPayments/EndBusinessDay',null).map(res => res.json());
  }
}
