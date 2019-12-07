import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarbeneficiariopComponent } from './inhabilitarbeneficiariop.component';

describe('InhabilitarbeneficiariopComponent', () => {
  let component: InhabilitarbeneficiariopComponent;
  let fixture: ComponentFixture<InhabilitarbeneficiariopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarbeneficiariopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarbeneficiariopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
