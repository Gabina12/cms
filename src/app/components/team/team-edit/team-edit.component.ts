import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Team } from '../../../models/Team';
import { TeamService } from '../../../services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFile } from '../../../models/UploadFile';
import { FileManagerService } from '../../../services/file-manager.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  team: Team;
  form: FormGroup;
  id: number; 
  mainImg: string;
  files: UploadFile[];
  
  constructor(private api: TeamService,
    private fapi: FileManagerService,
    private route: ActivatedRoute,
    private nav: Router) {
      this.route.params.subscribe( params => this.id = params['id'] );
     }

  ngOnInit() {
    this.fapi.get().subscribe((result) => {
      this.files = result;
    });

    this.api.getById(this.id).subscribe((res) => {
    this.team = res;
    this.mainImg = this.team.ImageUrl;
    this.form = new FormGroup({
      Id: new FormControl(this.team.Id, Validators.required),
      FirstName: new FormControl(this.team.FirstName, Validators.required),
      LastName: new FormControl(this.team.LastName, Validators.required),
      Position: new FormControl(this.team.Position, Validators.required),
      ImageUrl: new FormControl(this.team.ImageUrl,Validators.required),
      FacebookUrl: new FormControl(this.team.FacebookUrl, Validators.required),
      InstagramUrl: new FormControl(this.team.InstagramUrl, Validators.required),
      Skype: new FormControl(this.team.Skype, Validators.required),
      Biography: new FormControl(this.team.Biography, Validators.required),
      Lang: new FormControl(this.team.Lang, Validators.required)
    });
  });
  }

  edit(obj: Team){
    this.api.put(obj).subscribe((result) => {
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

