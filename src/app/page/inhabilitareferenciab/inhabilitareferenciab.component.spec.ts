import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitareferenciabComponent } from './inhabilitareferenciab.component';

describe('InhabilitareferenciabComponent', () => {
  let component: InhabilitareferenciabComponent;
  let fixture: ComponentFixture<InhabilitareferenciabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitareferenciabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitareferenciabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
