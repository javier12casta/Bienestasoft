import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuariov2Component } from './usuariov2.component';

describe('Usuariov2Component', () => {
  let component: Usuariov2Component;
  let fixture: ComponentFixture<Usuariov2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuariov2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuariov2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
