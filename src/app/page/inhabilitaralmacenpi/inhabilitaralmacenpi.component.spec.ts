import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitaralmacenpiComponent } from './inhabilitaralmacenpi.component';

describe('InhabilitaralmacenpiComponent', () => {
  let component: InhabilitaralmacenpiComponent;
  let fixture: ComponentFixture<InhabilitaralmacenpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitaralmacenpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitaralmacenpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
