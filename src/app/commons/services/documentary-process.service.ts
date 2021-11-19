import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryProcessService {
  tokenName: string = 'documentary-process';

  constructor() { }

  setToken(step: number) {
    localStorage.setItem(this.tokenName, JSON.stringify({current: step}));
  }

  getToken() {
    return localStorage.getItem(this.tokenName);
  }

  tokenExists() {
    return this.getToken() ? true : false;
  }

  updateToken(step: number) {
    
  }
}
