import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '../../../models/Team';
import { TeamService } from '../../../services/team.service';
import { Router } from '@angular/router';
import { UploadFile } from '../../../models/UploadFile';
import { FileManagerService } from '../../../services/file-manager.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  team: Team;
  form: FormGroup; 
  mainImg: string;
  files: UploadFile[];
  
  constructor(private api: TeamService,
    private fapi: FileManagerService,
    private nav: Router) { }

  ngOnInit() {

    this.fapi.get().subscribe((result) => {
      this.files = result;
    });

    this.form = new FormGroup({
      Id: new FormControl(0, Validators.required),
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Position: new FormControl(null, Validators.required),
      ImageUrl: new FormControl(null, Validators.required),
      FacebookUrl: new FormControl(null, Validators.required),
      InstagramUrl: new FormControl(null, Validators.required),
      Skype: new FormControl(null, Validators.required),
      Biography: new FormControl(null, Validators.required),
      Lang: new FormControl(localStorage.getItem('lang'), Validators.required)
    });
  }

  create(obj: Team){
    this.api.post(obj).subscribe((result) => {
      this.team = result;
        this.nav.navigateByUrl('team');
    });
  }

  onChangeMain(e){
    console.log(e);
    this.mainImg = e;
  }

  getParam(code: string){
    return localStorage.getItem(code);
  }

}
