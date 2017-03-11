import {Component, Inject} from '@angular/core';
import {Response, Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Let\'s get started!';
  reviews = [];
  wozUrl = 'https://www.smhaisale.com/woz';

  constructor(
    @Inject('mail') private mail,
    private http: Http
  ) {
    this.refresh();
    console.log(this.reviews);
  }

  refresh() {
    this.http.get(this.wozUrl)
      .subscribe(data => {this.reviews = data.json()});
  }
}
