import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarbeneficiariouComponent } from './inhabilitarbeneficiariou.component';

describe('InhabilitarbeneficiariouComponent', () => {
  let component: InhabilitarbeneficiariouComponent;
  let fixture: ComponentFixture<InhabilitarbeneficiariouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarbeneficiariouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarbeneficiariouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
