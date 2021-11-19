import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentaryProcessService } from 'src/app/commons/services/documentary-process.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
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
export class IntroductionComponent implements OnInit {
  introState: string = 'iteso'

  constructor(private documentaryProcess: DocumentaryProcessService, private router: Router) { }

  ngOnInit(): void {
    if(this.documentaryProcess.tokenExists()){
      this.router.navigate(['/watch']);
      return;
    }
    setTimeout(() => { this.introState = 'pap'}, 8750);
    setTimeout(() => { this.introState = 'presenting'}, 15750);
    setTimeout(() => { this.introState = 'web-documentary'}, 21750);
    setTimeout(() => { this.introState = 'connected'}, 28750);
  }
}
