import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentrodComponent } from './inhabilitarcentrod.component';

describe('InhabilitarcentrodComponent', () => {
  let component: InhabilitarcentrodComponent;
  let fixture: ComponentFixture<InhabilitarcentrodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentrodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
