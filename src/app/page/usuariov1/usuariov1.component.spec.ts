import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuariov1Component } from './usuariov1.component';

describe('Usuariov1Component', () => {
  let component: Usuariov1Component;
  let fixture: ComponentFixture<Usuariov1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Usuariov1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuariov1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
