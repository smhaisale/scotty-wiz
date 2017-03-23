import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dialog-summary',
  templateUrl: './dialog-summary.component.html',
  styleUrls: ['./dialog-summary.component.css']
})
export class DialogSummaryComponent implements OnInit {

  @Input() review;

  constructor() { }

  ngOnInit() {
  }

}
