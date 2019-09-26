import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarbeneficiariosComponent } from './inhabilitarbeneficiarios.component';

describe('InhabilitarbeneficiariosComponent', () => {
  let component: InhabilitarbeneficiariosComponent;
  let fixture: ComponentFixture<InhabilitarbeneficiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarbeneficiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarbeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
