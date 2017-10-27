import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../../services/pages.service';
import { MatDialog } from '@angular/material';
import { Page } from '../../../models/Page';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pages-main',
  templateUrl: './pages-main.component.html',
  styleUrls: ['./pages-main.component.css']
})
export class PagesMainComponent implements OnInit {
  pages: Page[];
  constructor(private api: PagesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getPages().subscribe((res) => {
      this.pages = res;
    });
  }

  openDialog(id: number, pageName: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.api.deletePage(id).subscribe((res) => {
          this.pages = this.pages.filter(x => x.Id !== id);
        });
      }
    });
  }

}
