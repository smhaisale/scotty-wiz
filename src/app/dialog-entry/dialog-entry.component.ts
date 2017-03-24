import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dialog-entry',
  templateUrl: './dialog-entry.component.html',
  styleUrls: ['./dialog-entry.component.css']
})
export class DialogEntryComponent implements OnInit {

  @Input() entry;

  constructor() { }

  ngOnInit() {
  }

}
