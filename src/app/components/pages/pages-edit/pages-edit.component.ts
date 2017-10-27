import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/Page';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PagesService } from '../../../services/pages.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages-edit',
  templateUrl: './pages-edit.component.html',
  styleUrls: ['./pages-edit.component.css']
})
export class PagesEditComponent implements OnInit {

  page: Page;
  form: FormGroup;
  id: number;

  constructor(private api: PagesService,
    private route: ActivatedRoute,
    private nav: Router) { 
      this.route.params.subscribe( params => this.id = params['id'] );
    }

  ngOnInit() {
      this.api.getPageById(this.id).subscribe((result) => {
        this.page = result;

        this.form = new FormGroup({
          Id: new FormControl(this.page.Id, Validators.required),
          Title: new FormControl(this.page.Title, Validators.required),
          Body: new FormControl(this.page.Body, Validators.required),
          DefaultUrl: new FormControl(this.page.DefaultUrl, Validators.required),
          PageName: new FormControl(this.page.PageName, Validators.required),
          Lang: new FormControl(localStorage.getItem('lang'), Validators.required)
        });
    });
  }

  editPost(page: Page){
    this.api.putPage(page).subscribe((result) => {
      this.page = result;
        this.nav.navigateByUrl('pages');
    });
  }

}
