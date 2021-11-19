import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-iteso',
  templateUrl: './logo-iteso.component.html',
  styleUrls: ['./logo-iteso.component.css'],
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
export class LogoItesoComponent implements OnInit {
  fade: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.fade = false; }, 0);
    setTimeout(() => { this.fade = true; }, 3000);
  }


}
