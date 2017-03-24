import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import Global = NodeJS.Global;

@Component({
  selector: 'app-dialog-summary-list',
  templateUrl: './dialog-summary-list.component.html',
  styleUrls: ['./dialog-summary-list.component.css']
})

export class DialogSummaryListComponent implements OnInit {

  @Input() reviews;
  @Input() selectedReview;

  @Output() selectReview = new EventEmitter();

  select(review) {
    console.log(review);
    this.selectedReview = review;
    this.selectReview.emit(review);
  }

  constructor() { }

  ngOnInit() {
  }

}
