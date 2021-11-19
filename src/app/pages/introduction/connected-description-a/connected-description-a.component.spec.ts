import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedDescriptionAComponent } from './connected-description-a.component';

describe('ConnectedDescriptionAComponent', () => {
  let component: ConnectedDescriptionAComponent;
  let fixture: ComponentFixture<ConnectedDescriptionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedDescriptionAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedDescriptionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
