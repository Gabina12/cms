import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cars } from '../models/Cars';

@Injectable()
export class CarsService {

  constructor(public http: Http) { }

  getCars() {
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/Cars?lang=${lang}`).map(res => res.json());
  }

  getCarById(id: number) {
    return this.http.get('/api/Cars/' + id).map(res => res.json());
  }

  putCar(car: Cars) {
    return this.http.put('/api/Cars/' + car.CarsId, car).map(res => res.json());
  }

  postCar(car: Cars) {
    return this.http.post('/api/Cars', car).map(res => res.json());
  }

  deleteCar(id: number){
    return this.http.delete('/api/Cars/' + id).map(res => res.json());
  }

  getDropDown(type: number){
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/DropDowns?type=${type}&lang=${lang}`).map(res => res.json());
  }

  getDropDowns(){
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/DropDowns/all?lang=${lang}`).map(res => res.json());
  }
}
