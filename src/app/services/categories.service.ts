import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Category } from '../models/Category';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class CategoryService {

  constructor(public http: Http, private localStorageService: LocalStorageService) { }

  getCategories() {
    let lang = localStorage.getItem('lang');
    return this.http.get('/api/Categories?lang=' + lang).map(res => res.json());
  }

  getCategoryById(id: number) {
    return this.http.get('/api/Categories/' + id).map(res => res.json());
  }

  putCategory(category: Category) {
    let lang = localStorage.getItem('lang');
    category.Lang = lang;
    return this.http.put('/api/Categories/' + category.Id, category).map(res => res.json());
  }

  postCategory(category: Category) {
    let lang = localStorage.getItem('lang');
    category.Lang = lang;
    return this.http.post('/api/Categories', category).map(res => res.json());
  }

  deleteCategory(id: number){
    return this.http.delete('/api/Categories/' + id).map(res => res.json());
  }

}
