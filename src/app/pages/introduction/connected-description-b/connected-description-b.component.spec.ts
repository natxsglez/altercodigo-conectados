import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedDescriptionBComponent } from './connected-description-b.component';

describe('ConnectedDescriptionBComponent', () => {
  let component: ConnectedDescriptionBComponent;
  let fixture: ComponentFixture<ConnectedDescriptionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedDescriptionBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedDescriptionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
