import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { User } from '../models/User';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  get(){
    return this.http.get('/api/Users', options).map(res => res.json());
  }

  auth(userName: string, password: string){
    return this.http.get(`/api/Users?userName=${userName}&password=${password}`).map(res => res.json());
  }

  post(user: User){
    return this.http.post('/api/Users', user, options).map(res => res.json());
  }
  
  getFormUrlEncoded(toConvert) {
		const formBody = [];
		for (const property in toConvert) {
			const encodedKey = decodeURIComponent(property);
			const encodedValue = decodeURIComponent(toConvert[property]);
			formBody.push(encodedKey + '=' + encodedValue);
    }
		return formBody.join('&');
	}

  getToken(user: string, psw: string) {

    var o = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    const field = {username: user, password: psw};
    return this.http.post('/api/token',this.getFormUrlEncoded(field),o)
    .map(res => res.json());
  }
}
