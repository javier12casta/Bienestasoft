import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacendiComponent } from './inhabilitaralmacendi.component';

describe('InhabilitaralmacendiComponent', () => {
  let component: InhabilitaralmacendiComponent;
  let fixture: ComponentFixture<InhabilitaralmacendiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacendiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
