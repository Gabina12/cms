import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Team } from '../models/Team';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class TeamService {

  constructor(public http: Http, private localStorageService: LocalStorageService) { }

  get(){
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Teams?lang=' + lang, options).map(res => res.json());
  }

  getById(id: number) {
    return this.http.get('/api/Teams/' + id, options).map(res => res.json());
  }

  put(team: Team) {
    let lang = localStorage.getItem('lang');
    team.Lang = lang;
    return this.http.put('/api/Teams/' + team.Id, team, options).map(res => res.json());
  }

  post(team: Team) {
    let lang = localStorage.getItem('lang');
    team.Lang = lang;
    return this.http.post('/api/Teams', team, options).map(res => res.json());
  }

  delete(id: number){
    return this.http.delete('/api/Teams/' + id, options).map(res => res.json());
  }

}
