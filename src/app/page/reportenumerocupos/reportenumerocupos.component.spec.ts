import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportenumerocuposComponent } from './reportenumerocupos.component';

describe('ReportenumerocuposComponent', () => {
  let component: ReportenumerocuposComponent;
  let fixture: ComponentFixture<ReportenumerocuposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportenumerocuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportenumerocuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
