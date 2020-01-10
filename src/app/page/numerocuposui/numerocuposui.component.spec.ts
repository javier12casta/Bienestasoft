import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocuposuiComponent } from './numerocuposui.component';

describe('NumerocuposuiComponent', () => {
  let component: NumerocuposuiComponent;
  let fixture: ComponentFixture<NumerocuposuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerocuposuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocuposuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
