import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentingComponent } from './presenting.component';

describe('PresentingComponent', () => {
  let component: PresentingComponent;
  let fixture: ComponentFixture<PresentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
