import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inhabilitarbeneficiarios1Component } from './inhabilitarbeneficiarios1.component';

describe('Inhabilitarbeneficiarios1Component', () => {
  let component: Inhabilitarbeneficiarios1Component;
  let fixture: ComponentFixture<Inhabilitarbeneficiarios1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inhabilitarbeneficiarios1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inhabilitarbeneficiarios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
