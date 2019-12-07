import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarbeneficiariouiComponent } from './inhabilitarbeneficiarioui.component';

describe('InhabilitarbeneficiariouiComponent', () => {
  let component: InhabilitarbeneficiariouiComponent;
  let fixture: ComponentFixture<InhabilitarbeneficiariouiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarbeneficiariouiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarbeneficiariouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
