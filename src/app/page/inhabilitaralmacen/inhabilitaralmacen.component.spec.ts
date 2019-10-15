import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacenComponent } from './inhabilitaralmacen.component';

describe('InhabilitaralmacenComponent', () => {
  let component: InhabilitaralmacenComponent;
  let fixture: ComponentFixture<InhabilitaralmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
