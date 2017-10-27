import { Component, OnInit } from '@angular/core';
import { Setting } from '../../../models/Settings';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SettingsService } from '../../../services/settings.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-settings-create',
  templateUrl: './settings-create.component.html',
  styleUrls: ['./settings-create.component.css']
})
export class SettingsCreateComponent implements OnInit {

  setting: Setting;
  form: FormGroup;

  constructor(private api: SettingsService,
    private nav: Router, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.form = new FormGroup({
      SettingId: new FormControl(0, Validators.required),
      SettingCode: new FormControl('', Validators.required),
      SettingValue: new FormControl(null, Validators.required),
      Lang: new FormControl(localStorage.getItem('lang'), Validators.required)
    });
  }

  create(obj: Setting){
    this.api.post(obj).subscribe((result) => {
      this.setting = result;
        this.nav.navigateByUrl('settings');
    });
  }

}
