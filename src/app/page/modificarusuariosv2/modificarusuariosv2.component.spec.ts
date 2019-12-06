import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificarusuariosv2Component } from './modificarusuariosv2.component';

describe('Modificarusuariosv2Component', () => {
  let component: Modificarusuariosv2Component;
  let fixture: ComponentFixture<Modificarusuariosv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modificarusuariosv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modificarusuariosv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
