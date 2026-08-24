import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Igor';
  title = 'quadrofront';
  userData = {
	email: 'igor@mail.com',
	role: 'Admin'
  };
}
