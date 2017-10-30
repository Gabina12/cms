import { Component, OnInit } from '@angular/core';
import { FileManagerService } from '../../services/file-manager.service';
import { UploadFile } from '../../models/UploadFile';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  uploadFiles: UploadFile[];
  constructor(private api: FileManagerService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.api.get().subscribe((res) => {
        this.uploadFiles = res;
    });
  }

  openDialog(fileName: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === true){
         this.api.delete(fileName).subscribe((res) => {
            this.uploadFiles = this.uploadFiles.filter(x => x.Url !== fileName);
         });
      }
    });
  }

}