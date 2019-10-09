import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhabilitarusuarios1Component } from './inhabilitarusuarios1.component';

describe('Inhabilitarusuarios1Component', () => {
  let component: Inhabilitarusuarios1Component;
  let fixture: ComponentFixture<Inhabilitarusuarios1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inhabilitarusuarios1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inhabilitarusuarios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
