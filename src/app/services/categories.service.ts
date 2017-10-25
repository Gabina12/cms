import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Category } from '../models/Category';

@Injectable()
export class CategoryService {

  constructor(public http: Http) { }

  getCategories() {
    return this.http.get('/api/Categories').map(res => res.json());
  }

  getCategoryById(id: number) {
    return this.http.get('/api/Categories/' + id).map(res => res.json());
  }

  putCategory(category: Category) {
    return this.http.put('/api/Categories/' + category.Id, category).map(res => res.json());
  }

  postCategory(category: Category) {
    return this.http.post('/api/Categories', category).map(res => res.json());
  }

  deleteCategory(id: number){
    return this.http.delete('/api/Categories/' + id).map(res => res.json());
  }

}
