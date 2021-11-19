import { Component, ElementRef, OnInit } from '@angular/core';

const fadeInTimeMS = 3000

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit () {}
}
