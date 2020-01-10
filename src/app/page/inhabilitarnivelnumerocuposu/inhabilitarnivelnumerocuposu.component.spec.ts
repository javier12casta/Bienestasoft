import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocuposuComponent } from './inhabilitarnivelnumerocuposu.component';

describe('InhabilitarnivelnumerocuposuComponent', () => {
  let component: InhabilitarnivelnumerocuposuComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocuposuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocuposuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocuposuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
