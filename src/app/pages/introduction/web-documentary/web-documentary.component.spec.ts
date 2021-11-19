import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDocumentaryComponent } from './web-documentary.component';

describe('WebDocumentaryComponent', () => {
  let component: WebDocumentaryComponent;
  let fixture: ComponentFixture<WebDocumentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDocumentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDocumentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
