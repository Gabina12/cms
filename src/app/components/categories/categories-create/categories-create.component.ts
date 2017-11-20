import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/Category';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  category: Category;
  form: FormGroup;
  categories: Category[];

  constructor(private api: CategoryService,
    private nav: Router) { }

  ngOnInit() {
    this.api.getCategories().subscribe((res) => {
      this.categories = res;
    });
    let lang = this.getParam('lang');
    this.form = new FormGroup({
      Id: new FormControl(0, Validators.required),
      Descrip: new FormControl('', Validators.required),
      ParentId: new FormControl(null, Validators.required),
      Url: new FormControl('', Validators.required),
      SortId: new FormControl(0, Validators.required),
      Lang: new FormControl(lang, Validators.required)
    });
  }

  createPost(category: Category) {
    category.Lang = 'ge';
    this.api.postCategory(category).subscribe((result) => {
      this.category = result;
        this.nav.navigateByUrl('categories');
    });
  }

  getParam(code: string){
    return localStorage.getItem(code);
  }

}
