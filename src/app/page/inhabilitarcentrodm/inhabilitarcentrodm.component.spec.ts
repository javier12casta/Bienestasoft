import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentrodmComponent } from './inhabilitarcentrodm.component';

describe('InhabilitarcentrodmComponent', () => {
  let component: InhabilitarcentrodmComponent;
  let fixture: ComponentFixture<InhabilitarcentrodmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentrodmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentrodmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
