import { Component, OnInit } from '@angular/core';
import { Setting } from '../../../models/Settings';
import { SettingsService } from '../../../services/settings.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-settings-main',
  templateUrl: './settings-main.component.html',
  styleUrls: ['./settings-main.component.css']
})
export class SettingsMainComponent implements OnInit {

  settings: Setting[];
  settingsFull: Setting[];
  constructor(private api: SettingsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.get().subscribe((result) => {
      this.settings = result;
      this.settingsFull = result;
    })
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
         this.api.delete(id).subscribe((res) => {
            this.settings = this.settings.filter(x => x.SettingId !== id);
         });
      }
    });
  }

  Search(search: string){
    if(search === ''){
      this.settings = this.settingsFull;
      return;
    }
    this.settings = this.settingsFull.filter(x=>x.SettingCode.includes(search) || x.SettingValue.includes(search));
  }

}
