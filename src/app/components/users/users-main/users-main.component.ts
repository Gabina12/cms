import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { User } from '../../../models/User';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.css']
})
export class UsersMainComponent implements OnInit {

  users: User[];
  constructor(private api: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.get().subscribe((result) => {
      this.users = result;
    });
    //let last  = sha256('Gabina1203#');
    //alert(last);
  }

  openDialog(Id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === true){
         /*this.api.delete(Id).subscribe((res) => {
            this.teams = this.teams.filter(x => x.Id !== Id);
         });*/
      }
    });
  }

  getParam(code: string){
    return localStorage.getItem(code);
  }

}
