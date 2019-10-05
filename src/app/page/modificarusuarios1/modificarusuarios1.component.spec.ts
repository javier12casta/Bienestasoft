import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificarusuarios1Component } from './modificarusuarios1.component';

describe('Modificarusuarios1Component', () => {
  let component: Modificarusuarios1Component;
  let fixture: ComponentFixture<Modificarusuarios1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modificarusuarios1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modificarusuarios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
