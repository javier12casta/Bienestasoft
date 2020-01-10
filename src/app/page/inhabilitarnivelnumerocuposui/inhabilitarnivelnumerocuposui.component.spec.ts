import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocuposuiComponent } from './inhabilitarnivelnumerocuposui.component';

describe('InhabilitarnivelnumerocuposuiComponent', () => {
  let component: InhabilitarnivelnumerocuposuiComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocuposuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocuposuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocuposuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
