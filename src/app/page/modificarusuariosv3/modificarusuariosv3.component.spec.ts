import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificarusuariosv3Component } from './modificarusuariosv3.component';

describe('Modificarusuariosv3Component', () => {
  let component: Modificarusuariosv3Component;
  let fixture: ComponentFixture<Modificarusuariosv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modificarusuariosv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modificarusuariosv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
