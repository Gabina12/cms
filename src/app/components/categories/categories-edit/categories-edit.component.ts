import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/Category';
import { CategoryService } from '../../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  id: number;
  category: Category;
  form: FormGroup;
  success: boolean;
  categories: Category[];
  
  constructor(private api: CategoryService,
    private route: ActivatedRoute,
    private nav: Router) {
      this.route.params.subscribe( params => this.id = params['id'] );
    }

  ngOnInit() {
    this.api.getCategories().subscribe((res) => {
      this.categories = res;
    })
    this.api.getCategoryById(this.id).subscribe((result) => {
        this.category = result;

        this.form = new FormGroup({
          Id: new FormControl(this.category.Id, Validators.required),
          Descrip: new FormControl(this.category.Descrip, Validators.required),
          ParentId: new FormControl(this.category.ParentId, Validators.required),
          Url: new FormControl(this.category.Url, Validators.required),
          SortId: new FormControl(this.category.SortId, Validators.required)
        });

    });
  }

  editPost(category: Category) {
    this.api.putCategory(category).subscribe((result) => {
      this.category = result;
        this.nav.navigateByUrl('categories');
    });
  }


}
