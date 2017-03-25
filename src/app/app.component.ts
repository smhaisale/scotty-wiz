import { Component, Inject } from '@angular/core';
import { Response, Http } from "@angular/http";
import { SocketService } from "./socket.service";
import { StompService } from 'ng2-stomp-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  reviews = [];
  selectedReview = {};
  wozUrl = 'https://www.smhaisale.com/woz';

  public messages: Array<any>;

  constructor(@Inject('mail') private mail, @Inject('socket') private socket, private http: Http) {
    this.messages = [];
    this.refresh();
  }

  // public ngOnInit() {
  //   this.socket.getEventListener().subscribe(event => {
  //     if(event.type == "message") {
  //       this.messages.push(event.data);
  //     }
  //     if(event.type == "close") {
  //       this.messages.push("/The socket connection has been closed");
  //     }
  //     if(event.type == "open") {
  //       this.messages.push("/The socket connection has been established");
  //     }
  //   });
  // }
  //
  // public ngOnDestroy() {
  //   this.socket.close();
  // }
  //
  // public send() {
  //
  //   //if(this.chatBox) {
  //     //this.socket.send(this.chatBox);
  //     //this.chatBox = "";
  //   //}
  // }

  select(review) {
    console.log(review);
    this.selectedReview = review;
  }

  refresh() {
    this.http.get(this.wozUrl)
      .subscribe(data => {
        this.reviews = data.json();
        this.selectedReview = this.reviews[0];
      });
  }

  getLocals() {

    var reviews = [];

    var dialogEntry1 = {"source":"user", "text":"This is my query"};
    var dialogEntry2 = {"source":"system", "text":"This is my response"};
    var dialogEntry3 = {"source":"user", "text":"This is my second query"};
    var dialogEntry4 = {"source":"system", "text":"This is my incredibly long response that makes" +
      " absolutely no sense whatsoever, but still needs to be long just because it needs to be " +
      "tested on the frontend."};
    var dialogEntry5 = {"source":"user", "text":"This is one more query from the user, because he " +
      "still hasn't gotten the information he needs!"};
    var dialogEntry6 = {"source":"system", "text":"This is the final system response to said query, " +
      " which is the correct answer to the user's query"};
    var dialogEntry7 = {"source":"user", "text":"This is the user's message of jubilation and final " +
    "acceptance of the system's superiority."};

    var dialogEntries = [dialogEntry1, dialogEntry2, dialogEntry3, dialogEntry4, dialogEntry5,
      dialogEntry6, dialogEntry7, dialogEntry1, dialogEntry2, dialogEntry3, dialogEntry4,
      dialogEntry5, dialogEntry6, dialogEntry7];

    var review = {
      "userId": "this-is-a-user-identifier",
      "query":  "this is the user's query",
      "responses":  ["possible response 1", "possible response 2", "possible response 3",
        "possible response 1", "possible response 2", "possible response 3"],
      "selectedResponse": "possible response 1",
      "isReviewed": false,
      "history": dialogEntries
    };

    for (var i = 0; i < 20; i++) {
      review.userId = "user-" + i;
      reviews.push(JSON.parse(JSON.stringify(review)));
    }

    return reviews;
  }
}
