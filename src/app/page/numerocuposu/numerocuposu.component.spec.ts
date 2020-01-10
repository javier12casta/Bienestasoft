import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocuposuComponent } from './numerocuposu.component';

describe('NumerocuposuComponent', () => {
  let component: NumerocuposuComponent;
  let fixture: ComponentFixture<NumerocuposuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerocuposuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocuposuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
