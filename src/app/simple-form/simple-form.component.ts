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
  styles: [`
  :host {
    display: flex;
    flex-direction: column;
  }
  input:focus {
  font-style: italic;
  }
  button {
    border: none;
  }
  ul {
    list-style:none;
    padding-left:0;
  }
  div.dialogHistory {
    overflow: hidden;
    display: inline-block;
    background: #D5D5D5;
    padding: 5px;
  }
  div.dialogBox{
    display: inline-block;
    box-sizing: border-box;
    border-radius: 5px;
    background: #96858F;
    margin: 5px; 
    padding: 5px;
    position: relative;
  }
  div.userDialog{
  margin-left:5px;
  background: #96858F;
  }
  div.systemDialog{
  float:right;
  background: #6D7993;
  }
  `]
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
