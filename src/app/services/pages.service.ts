import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Page } from '../models/Page';

@Injectable()
export class PagesService {

  constructor(public http: Http) { }

  getPages() {
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Pages?lang=' + lang).map(res => res.json());
  }

  getPageById(id: number) {
    return this.http.get('/api/Pages/' + id).map(res => res.json());
  }

  getPageByName(pageName: string) {
    return this.http.get('/api/Pages/' + pageName).map(res => res.json());
  }

  putPage(page: Page) {
    let lang = localStorage.getItem('lang');
    page.Lang = lang;
    return this.http.put('/api/Pages/' + page.Id, page).map(res => res.json());
  }

  postPage(page: Page) {
    let lang = localStorage.getItem('lang');
    page.Lang = lang;
    return this.http.post('/api/Pages', page).map(res => res.json());
  }

  deletePage(id: number){
    return this.http.delete('/api/Pages/' + id).map(res => res.json());
  }

}
