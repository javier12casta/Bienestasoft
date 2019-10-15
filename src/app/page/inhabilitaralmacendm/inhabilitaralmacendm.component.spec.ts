import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacendmComponent } from './inhabilitaralmacendm.component';

describe('InhabilitaralmacendmComponent', () => {
  let component: InhabilitaralmacendmComponent;
  let fixture: ComponentFixture<InhabilitaralmacendmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacendmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacendmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
