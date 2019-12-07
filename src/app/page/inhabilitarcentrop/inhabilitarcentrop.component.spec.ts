import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentropComponent } from './inhabilitarcentrop.component';

describe('InhabilitarcentropComponent', () => {
  let component: InhabilitarcentropComponent;
  let fixture: ComponentFixture<InhabilitarcentropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
