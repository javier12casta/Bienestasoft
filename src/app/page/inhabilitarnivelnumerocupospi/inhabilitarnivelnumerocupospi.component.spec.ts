import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocupospiComponent } from './inhabilitarnivelnumerocupospi.component';

describe('InhabilitarnivelnumerocupospiComponent', () => {
  let component: InhabilitarnivelnumerocupospiComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocupospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocupospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocupospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
