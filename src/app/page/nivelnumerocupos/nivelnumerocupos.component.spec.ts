import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelnumerocuposComponent } from './nivelnumerocupos.component';

describe('NivelnumerocuposComponent', () => {
  let component: NivelnumerocuposComponent;
  let fixture: ComponentFixture<NivelnumerocuposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelnumerocuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelnumerocuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
