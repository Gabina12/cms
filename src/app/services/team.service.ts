import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Http } from '@angular/http';
import { Team } from '../models/Team';

@Injectable()
export class TeamService {

  constructor(public http: Http, private localStorageService: LocalStorageService) { }

  get(){
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Teams?lang=' + lang).map(res => res.json());
  }

  getById(id: number) {
    return this.http.get('/api/Teams/' + id).map(res => res.json());
  }

  put(team: Team) {
    let lang = localStorage.getItem('lang');
    team.Lang = lang;
    return this.http.put('/api/Teams/' + team.Id, team).map(res => res.json());
  }

  post(team: Team) {
    let lang = localStorage.getItem('lang');
    team.Lang = lang;
    return this.http.post('/api/Teams', team).map(res => res.json());
  }

  delete(id: number){
    return this.http.delete('/api/Teams/' + id).map(res => res.json());
  }

}
