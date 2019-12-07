import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhabilitarusuarios3Component } from './inhabilitarusuarios3.component';

describe('Inhabilitarusuarios3Component', () => {
  let component: Inhabilitarusuarios3Component;
  let fixture: ComponentFixture<Inhabilitarusuarios3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inhabilitarusuarios3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inhabilitarusuarios3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
