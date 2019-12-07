import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhabilitarusuarios2Component } from './inhabilitarusuarios2.component';

describe('Inhabilitarusuarios2Component', () => {
  let component: Inhabilitarusuarios2Component;
  let fixture: ComponentFixture<Inhabilitarusuarios2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inhabilitarusuarios2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inhabilitarusuarios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
