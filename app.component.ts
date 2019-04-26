import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  private apiUrl ='https://c947529d08fc936e51a9812d604693';

  data :any = {};

}
