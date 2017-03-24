import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrls: ['./dialog-information.component.css']
})
export class DialogInformationComponent implements OnInit {

  @Input() dialog;

  constructor() { }

  ngOnInit() {
  }

}
