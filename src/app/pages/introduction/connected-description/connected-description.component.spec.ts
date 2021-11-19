import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedDescriptionComponent } from './connected-description.component';

describe('ConnectedDescriptionComponent', () => {
  let component: ConnectedDescriptionComponent;
  let fixture: ComponentFixture<ConnectedDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
