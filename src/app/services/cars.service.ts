import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Cars } from '../models/Cars';
import { Token } from '../models/Token';
import { FormGroup , FormControl} from '@angular/forms';

@Injectable()
export class CarsService {

  form: FormGroup;
  token:Token;
  options: RequestOptions;

  constructor(public http: Http) { 

    this.getToken("TEST","TEST123").subscribe((result) => {
      console.error(result);
      this.token = result;

      this.options = new RequestOptions({
        headers: new Headers({
          'Authorization': this.token.access_token
        })
      });
      console.log("TOKEN = " + this.token.access_token);
    });
  }

  getFormUrlEncoded(toConvert) {
		const formBody = [];
		for (const property in toConvert) {
			const encodedKey = encodeURIComponent(property);
			const encodedValue = encodeURIComponent(toConvert[property]);
			formBody.push(encodedKey + '=' + encodedValue);
    }
    console.error(formBody.join('&'));
		return formBody.join('&');
	}

  getToken(user: string, psw: string) {

    var o = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    const field = {username: user, password: psw};
    return this.http.post('/api/Token',this.getFormUrlEncoded(field),o).map(res => res.json());
  }

  getCars() {    
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/Cars?lang=${lang}`, this.options).map(res => res.json());
  }

  getCarById(id: number) {
    return this.http.get('/api/Cars/' + id, this.options).map(res => res.json());
  }

  putCar(car: Cars) {
    return this.http.put('/api/Cars/' + car.CarsId, car, this.options).map(res => res.json());
  }

  postCar(car: Cars) {
    return this.http.post('/api/Cars', car, this.options).map(res => res.json());
  }

  deleteCar(id: number){
    return this.http.delete('/api/Cars/' + id, this.options).map(res => res.json());
  }

  getDropDown(type: number){
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/DropDowns?type=${type}&lang=${lang}`, this.options).map(res => res.json());
  }

  getDropDowns(){
    let lang = localStorage.getItem('lang');
    return this.http.get(`/api/DropDowns/all?lang=${lang}`, this.options).map(res => res.json());
  }
}
