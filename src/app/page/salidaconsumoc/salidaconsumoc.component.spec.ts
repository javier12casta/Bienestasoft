import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaconsumocComponent } from './salidaconsumoc.component';

describe('SalidaconsumocComponent', () => {
  let component: SalidaconsumocComponent;
  let fixture: ComponentFixture<SalidaconsumocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaconsumocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaconsumocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
