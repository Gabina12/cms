import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/User';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  auth(userName: string, password: string){
    return this.http.get(`/api/Users?userName=${userName}&password=${password}`).map(res => res.json());
  }

  post(user: User){
    return this.http.post('/api/Users', user).map(res => res.json());
  }
  

}
