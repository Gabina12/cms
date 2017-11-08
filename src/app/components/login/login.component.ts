import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  AuthUser } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { Token } from '../../models/Token';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  token: Token;
  
  constructor(private auth: AuthService,
  private iuser: UserService,
  private nav: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      UserName: new FormControl(null, Validators.required),
      PasswordHash: new FormControl(null, Validators.required)
    });
  }

  Auth(user: AuthUser){
    this.auth.getToken(user.UserName,user.PasswordHash).subscribe((res) => {
        this.token = res;
        if(this.token != null && this.token.access_token != ""){
          localStorage.removeItem('token');
          localStorage.setItem('token', this.token.access_token);
          this.iuser.SetLogin();
          this.iuser.SetToken(this.token);
          ss.
          this.nav.navigateByUrl('home');
        }else{
          alert('მომხმარებელი ან პაროლი არასწორია!');
        }
    })
  }

}
