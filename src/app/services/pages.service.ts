import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Page } from '../models/Page';
import { LocalStorageService } from 'angular-2-local-storage';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class PagesService {

  constructor(public http: Http, private localStorageService: LocalStorageService) { }

  getPages() {
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Pages?lang=' + lang, options).map(res => res.json());
  }

  getPageById(id: number) {
    return this.http.get('/api/Pages/' + id, options).map(res => res.json());
  }

  getPageByName(pageName: string) {
    return this.http.get('/api/Pages/' + pageName, options).map(res => res.json());
  }

  putPage(page: Page) {
    let lang = localStorage.getItem('lang');
    page.Lang = lang;
    return this.http.put('/api/Pages/' + page.Id, page, options).map(res => res.json());
  }

  postPage(page: Page) {
    let lang = localStorage.getItem('lang');
    page.Lang = lang;
    return this.http.post('/api/Pages', page, options).map(res => res.json());
  }

  deletePage(id: number){
    return this.http.delete('/api/Pages/' + id, options).map(res => res.json());
  }

}
