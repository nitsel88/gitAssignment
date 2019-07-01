import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(buttonClicked:string) {
    this.data.changeMessage(buttonClicked)
 }

}