import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isLoggedIn = false;
  constructor(public user: UserService) {
    if(localStorage.getItem('token')) {
      this.isLoggedIn = true;
    }
  }

}
