import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacenuiComponent } from './inhabilitaralmacenui.component';

describe('InhabilitaralmacenuiComponent', () => {
  let component: InhabilitaralmacenuiComponent;
  let fixture: ComponentFixture<InhabilitaralmacenuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacenuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacenuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
