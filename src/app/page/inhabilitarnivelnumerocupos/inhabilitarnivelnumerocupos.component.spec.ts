import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocuposComponent } from './inhabilitarnivelnumerocupos.component';

describe('InhabilitarnivelnumerocuposComponent', () => {
  let component: InhabilitarnivelnumerocuposComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocuposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
