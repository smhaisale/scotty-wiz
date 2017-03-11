import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  userId = 'random-user-id';

  query = 'What have I got?';

  responses = [
    'You\'ve got mail!',
    'You\'ve got another mail!',
    'Guess what ...'
  ];

  constructor() { }

}
