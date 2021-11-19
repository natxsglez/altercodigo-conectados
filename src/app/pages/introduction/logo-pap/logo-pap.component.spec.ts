import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPapComponent } from './logo-pap.component';

describe('LogoPapComponent', () => {
  let component: LogoPapComponent;
  let fixture: ComponentFixture<LogoPapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoPapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoPapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
