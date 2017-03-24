import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})

export class UserInformationComponent implements OnInit {

  @Input() userId;

  constructor() { }

  ngOnInit() {
  }

}
