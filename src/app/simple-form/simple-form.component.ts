import {Component, OnInit, Input} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-simple-form',
  template: `
    <hr>
    <div>
    <b>User ID</b> : {{userId}}
    <br />
    <b>Input </b> : {{query}}
    <br />
    
    <br />
    <b>Response Options </b> :
    <ul>
      <li *ngFor="let response of responses" (mouseover)="fontWeight(bold())" (click)="onClickOption(response)">
        {{response}}
      </li>
    </ul>
    <br />
    <input #myInput type="text" [(ngModel)]="selectedResponse">
    <button (click)="onClick($event, myInput.value)">Confirm</button>
    </div>
  `,
  styles: []
})

export class SimpleFormComponent implements OnInit {

  @Input() userId;
  @Input() query;
  @Input() responses;
  @Input() history;
  selectedResponse = "";
  wozUrl = 'http://54.175.153.240/woz';

  getDialogClass(dialog) {
    return "dialogBox " + (dialog.source === 'system') ? "systemDialog" : "userDialog";
  }

  onClickOption(value) {
    this.selectedResponse = value;
  }

  onClick(event, value) {
    // Send back confirmed response to Scotty server
    this.http.get(this.wozUrl+"?userId="+this.userId+"&query="+this.query+"&response="+this.selectedResponse, {})
      .subscribe(success => console.log(success));
  }

  constructor(private http : Http) { }

  ngOnInit() {
  }

}
