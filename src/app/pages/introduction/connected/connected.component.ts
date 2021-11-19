import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('invisible', style({ opacity: 0 })),
      state('visble', style({ opacity: 1 })),
      transition('invisible => visible', [
        animate("3000ms")
        ]),
      transition('visible => invisible', [
        animate("3000ms")
      ])
    ])
  ]
})
export class ConnectedComponent implements OnInit {
  fade: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.fade = false; }, 0);
  }
}
