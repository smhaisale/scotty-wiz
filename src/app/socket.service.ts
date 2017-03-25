import { Injectable, EventEmitter } from '@angular/core';

var SockJS = require('sockjs-client');
var Stomp = require('stompjs');

@Injectable()
export class SocketService {

  private socket: WebSocket;
  private stompClient: any;
  private listener: EventEmitter<any> = new EventEmitter();

  public constructor() {
    var socket = new SockJS('http://localhost:8080/real-time-woz');

    this.stompClient = Stomp.over(socket);
    this.stompClient.connect("guest", "guest", function(frame) {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('http://localhost:8080/topic/reviews', function(reviews) {
        console.log("from", reviews);
      });
    }, function (err) {
      console.log('err', err);
    });
  }

  send() {
    this.stompClient.send("http://localhost:8080/app/reviews", {}, JSON.stringify({ 'name': "kitica" }));
  }
}
