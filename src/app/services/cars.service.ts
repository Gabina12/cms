import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Cars } from '../models/Cars';
import { Token } from '../models/Token';
import { FormGroup , FormControl} from '@angular/forms';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });


@Injectable()
export class CarsService {

  form: FormGroup;
  token:Token;
  options: RequestOptions;

  constructor(public http: Http) {
   
   }

  getCars() {    
      let lang = localStorage.getItem('lang');
      return this.http.get(`/api/Cars?lang=${lang}`, options).map(res => res.json());
  }

  getCarById(id: number) {
    return this.http.get('/api/Cars/' + id, options).map(res => res.json());
  }

  putCar(car: Cars) {
    return this.http.put('/api/Cars/' + car.CarsId, car, options).map(res => res.json());
  }

  postCar(car: Cars) {
    return this.http.post('/api/Cars', car, options).map(res => res.json());
  }

  deleteCar(id: number){
    return this.http.delete('/api/Cars/' + id, options).map(res => res.json());
  }

  getDropDown(type: number){
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/DropDowns?type=${type}&lang=${lang}`, options).map(res => res.json());
  }

  getDropDowns(){
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/DropDowns/all?lang=${lang}`, options).map(res => res.json());
  }
}
