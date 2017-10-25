import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  language: string;
  constructor(private localStorageService: LocalStorageService) {
    
   }

  ngOnInit() {
    if (localStorage.getItem('lang') === null)  {
      this.language = 'ge';
      localStorage.setItem('lang','ge');
    } else {
      this.language = localStorage.getItem('lang');
    }
  }

  ChangeLang(lang: string) {
    if(lang !== localStorage.getItem('lang')){
      localStorage.setItem('lang',lang);
    }
  }

  isActive(lang: string){
    if(lang === localStorage.getItem('lang')) return 'is-active';
    return '';
  }

}
