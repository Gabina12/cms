import { Component, OnInit } from '@angular/core';
import { Setting } from '../../../models/Settings';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SettingsService } from '../../../services/settings.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.css']
})
export class SettingsEditComponent implements OnInit {

  setting: Setting;
  form: FormGroup;
  id: number;
  
  constructor(private api: SettingsService,
    private route: ActivatedRoute,
    private nav: Router) { 
      this.route.params.subscribe( params => this.id = params['id'] );
    }

  ngOnInit() {
   
    this.api.getById(this.id).subscribe((res) => {
      this.setting = res;
      this.form = new FormGroup({
        SettingId: new FormControl(this.setting.SettingId, Validators.required),
        SettingCode: new FormControl(this.setting.SettingCode, Validators.required),
        SettingValue: new FormControl(this.setting.SettingValue, Validators.required),
        Lang: new FormControl(this.setting.Lang, Validators.required)
      });
    });
   
  }

  edit(obj: Setting){
    this.api.put(obj).subscribe((result) => {
      this.setting = result;
        this.nav.navigateByUrl('settings');
    });
  }
}
