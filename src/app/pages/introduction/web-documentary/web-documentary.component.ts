import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-documentary',
  templateUrl: './web-documentary.component.html',
  styleUrls: ['./web-documentary.component.css'],
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
export class WebDocumentaryComponent implements OnInit {
  fade: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.fade = false; }, 0);
    setTimeout(() => { this.fade = true; }, 4000);
  }
}
