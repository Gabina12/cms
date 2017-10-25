import { Component, OnInit } from '@angular/core';
import { Page } from '../../../models/Page';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PagesService } from '../../../services/pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-create',
  templateUrl: './pages-create.component.html',
  styleUrls: ['./pages-create.component.css']
})
export class PagesCreateComponent implements OnInit {

  page: Page;
  form: FormGroup;

  constructor(private api: PagesService,
    private nav: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      Id: new FormControl(0, Validators.required),
      Title: new FormControl('', Validators.required),
      Body: new FormControl(null, Validators.required),
      DefaultUrl: new FormControl('', Validators.required),
      PageName: new FormControl(0, Validators.required)
    });

  }

  createPost(page: Page) {
    page.Lang = 'ge';
    this.api.postPage(page).subscribe((result) => {
      this.page = result;
        this.nav.navigateByUrl('pages');
    });
  }
}
