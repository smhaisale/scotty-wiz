import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dialog-summary-list',
  templateUrl: './dialog-summary-list.component.html',
  styleUrls: ['./dialog-summary-list.component.css']
})
export class DialogSummaryListComponent implements OnInit {

  @Input() reviews;

  constructor() { }

  ngOnInit() {
  }

}
