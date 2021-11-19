import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoItesoComponent } from './logo-iteso.component';

describe('LogoItesoComponent', () => {
  let component: LogoItesoComponent;
  let fixture: ComponentFixture<LogoItesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoItesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoItesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
