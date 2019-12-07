import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentropiComponent } from './inhabilitarcentropi.component';

describe('InhabilitarcentropiComponent', () => {
  let component: InhabilitarcentropiComponent;
  let fixture: ComponentFixture<InhabilitarcentropiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentropiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentropiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
