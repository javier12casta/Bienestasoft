import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentrodiComponent } from './inhabilitarcentrodi.component';

describe('InhabilitarcentrodiComponent', () => {
  let component: InhabilitarcentrodiComponent;
  let fixture: ComponentFixture<InhabilitarcentrodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentrodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentrodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
