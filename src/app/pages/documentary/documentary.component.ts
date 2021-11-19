import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SafePipe } from 'src/app/commons/pipes/safe.pipe';
import { DocumentaryProcessService } from 'src/app/commons/services/documentary-process.service';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css']
})
export class DocumentaryComponent implements OnInit {
  @ViewChild("content", {static: true}) modal: TemplateRef<any> | undefined;
  stages: boolean[] = [true, false, false, false, false];
  currStage: number = 0;
  currlink: SafeResourceUrl = '';

  videos: string[] = ['https://www.youtube.com/embed/DfECqGOW77g?autoplay=1', 
                      'https://www.youtube.com/embed/uI2E_noE36s?autoplay=1',
                      'https://www.youtube.com/embed/bzXXvm38Ta0?autoplay=1',
                      'https://www.youtube.com/embed/MJ3DjZBX9rg?autoplay=1',
                      'https://www.youtube.com/embed/IWkzOrjC9fE?autoplay=1',
                      'https://www.youtube.com/embed/OiIMKf_AB4o?autoplay=1',
                      'https://www.youtube.com/embed/jHaDdfwVfB8?autoplay=1',
                      'https://www.youtube.com/embed/NCL5jqXwqwE?autoplay=1'
                    ];

  constructor(private documentaryProcess: DocumentaryProcessService, private router: Router, config: NgbModalConfig, private modalService: NgbModal, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if(!this.documentaryProcess.tokenExists()){
      this.router.navigate(['']);
      return;
    }
    this.currStage = JSON.parse(this.documentaryProcess.getToken() || '{}').current;
    if(this.currStage === 0){
      this.setVideoLink(this.videos[0]);
      this.openModal();
    }
    this.updateStage();
  }

  openModal(){
    this.modalService.open(this.modal);
  }

  setVideoLink(link: string){
    this.currlink = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  updateStage(){
    for(let i = 0; i <= this.currStage / 2 + 1; i++){
      this.stages[i] = true;
    }
  }

  openModalWithVideo(video: number){
    this.setVideoLink(this.videos[video]);
    this.openModal();
  }

  closeModal(){
    if(this.currStage > 8){
      // ¿Qué va a pasar cuando se termine el documental?
    } else {
      this.currStage ++;
        if(this.currStage % 2 === 1){
        this.documentaryProcess.setToken(this.currStage);
        this.updateStage();
      }
    }
    this.modalService.dismissAll();
  }
}
