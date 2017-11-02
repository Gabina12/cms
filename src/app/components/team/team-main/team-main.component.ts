import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/Team';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-team-main',
  templateUrl: './team-main.component.html',
  styleUrls: ['./team-main.component.css']
})
export class TeamMainComponent implements OnInit {
  teams: Team[];
  constructor(private api: TeamService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.get().subscribe((result) => {
      this.teams = result;
    });
  }

  Search(search: string){

  }

  openDialog(Id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === true){
         this.api.delete(Id).subscribe((res) => {
            this.teams = this.teams.filter(x => x.Id !== Id);
         });
      }
    });
  }

  getParam(code: string){
    return localStorage.getItem(code);
  }

}
