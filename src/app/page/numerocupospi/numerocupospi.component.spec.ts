import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocupospiComponent } from './numerocupospi.component';

describe('NumerocupospiComponent', () => {
  let component: NumerocupospiComponent;
  let fixture: ComponentFixture<NumerocupospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerocupospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocupospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
