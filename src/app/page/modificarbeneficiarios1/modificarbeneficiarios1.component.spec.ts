import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificarbeneficiarios1Component } from './modificarbeneficiarios1.component';

describe('Modificarbeneficiarios1Component', () => {
  let component: Modificarbeneficiarios1Component;
  let fixture: ComponentFixture<Modificarbeneficiarios1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modificarbeneficiarios1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modificarbeneficiarios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
