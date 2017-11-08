import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Category } from '../models/Category';
import { LocalStorageService } from 'angular-2-local-storage';

let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class CategoryService {

  constructor(public http: Http, private localStorageService: LocalStorageService) { }

  getCategories() {
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Categories?lang=' + lang, options).map(res => res.json());
  }

  getCategoryById(id: number) {
    return this.http.get('/api/Categories/' + id, options).map(res => res.json());
  }

  putCategory(category: Category) {
    let lang = localStorage.getItem('lang');
    category.Lang = lang;
    return this.http.put('/api/Categories/' + category.Id, category, options).map(res => res.json());
  }

  postCategory(category: Category) {
    let lang = localStorage.getItem('lang');
    category.Lang = lang;
    return this.http.post('/api/Categories', category, options).map(res => res.json());
  }

  deleteCategory(id: number){
    return this.http.delete('/api/Categories/' + id, options).map(res => res.json());
  }

}
