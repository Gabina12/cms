import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Setting } from '../models/Settings';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class SettingsService {

  constructor(private http: Http, private localStorageService: LocalStorageService) { }

  get() {
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Settings?lang=' + lang).map(res => res.json());
  }

  getById(id: number) {
    return this.http.get('/api/Settings/' + id).map(res => res.json());
  }

  put(s: Setting) {
    let lang = localStorage.getItem('lang');
    s.Lang = lang;
    return this.http.put('/api/Settings/' + s.SettingId, s).map(res => res.json());
  }

  post(s: Setting) {
    let lang = localStorage.getItem('lang');
    s.Lang = lang;
    return this.http.post('/api/Settings', s).map(res => res.json());
  }

  delete(id: number){
    return this.http.delete('/api/Settings/' + id).map(res => res.json());
  }
}
