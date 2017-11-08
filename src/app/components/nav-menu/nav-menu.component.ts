import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { SettingsService } from '../../services/settings.service';
import { Setting } from '../../models/Settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  settings: Setting[];
  language: string;
  constructor(private localStorageService: LocalStorageService, 
    private api: SettingsService,
    private nav: Router) {
    
   }

  ngOnInit() {
    if (localStorage.getItem('lang') === null)  {
      this.language = 'ge';
      localStorage.setItem('lang','ge');
    } else {
      this.language = localStorage.getItem('lang');
    }

    if(localStorage.getItem('c_lang') !== localStorage.getItem('lang')){
      this.api.get().subscribe((res) => {
        this.settings = res;
        localStorage.setItem('c_lang',this.language);
        this.settings.forEach(element => {
          localStorage.setItem(element.SettingCode,element.SettingValue);
        });
      })
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

  getParam(code: string){
    return localStorage.getItem(code);
  }

  LogOut(){
    localStorage.removeItem('token');
    this.nav.navigateByUrl('login');
  }

}
