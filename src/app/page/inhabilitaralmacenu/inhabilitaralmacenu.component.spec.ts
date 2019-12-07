import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacenuComponent } from './inhabilitaralmacenu.component';

describe('InhabilitaralmacenuComponent', () => {
  let component: InhabilitaralmacenuComponent;
  let fixture: ComponentFixture<InhabilitaralmacenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
