import {Component, OnInit, Input} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-dialog-actions',
  templateUrl: './dialog-actions.component.html',
  styleUrls: ['./dialog-actions.component.css']
})
export class DialogActionsComponent implements OnInit {

  @Input() dialog;

  selectedResponse = '';
  wozUrl = 'http://54.175.153.240/woz';

  selectResponse(response) {
    console.log(response);
    this.selectedResponse = response;
  }

  confirmResponse(event, value) {
    // Send back confirmed response to Scotty server
    this.http.get(this.wozUrl+"?userId="+this.dialog.userId+"&query="+this.dialog.query+"&response="+this.selectedResponse, {})
      .subscribe(success => console.log(success));
  }

  constructor(private http : Http) { }

  ngOnInit() {

  }

}
