import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Token } from '../models/Token';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private user: User;
  private token: Token;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  SetLogin(){
    this.isUserLoggedIn = true;
  }

  SetToken(itoken: Token){
    this.token = itoken;
  }

  IsLogedIn(){
    return this.isUserLoggedIn;
  }

}
