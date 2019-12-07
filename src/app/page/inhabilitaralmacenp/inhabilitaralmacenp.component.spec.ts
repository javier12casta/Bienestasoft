import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacenpComponent } from './inhabilitaralmacenp.component';

describe('InhabilitaralmacenpComponent', () => {
  let component: InhabilitaralmacenpComponent;
  let fixture: ComponentFixture<InhabilitaralmacenpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacenpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacenpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
