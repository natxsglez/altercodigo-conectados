import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentaryProcessService } from 'src/app/commons/services/documentary-process.service';

@Component({
  selector: 'app-connected-description',
  templateUrl: './connected-description.component.html',
  styleUrls: ['./connected-description.component.css']
})
export class ConnectedDescriptionComponent implements OnInit {
  descriptionSelector: string = 'a';
  constructor(private router: Router, private documentaryProcess: DocumentaryProcessService) { }

  ngOnInit(): void {
    setTimeout(() => { this.descriptionSelector = 'b'; }, 4500);
  }

  onClick(){
    this.documentaryProcess.setToken(0);
    this.router.navigate(['/watch']);
  }
}
