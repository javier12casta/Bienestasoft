import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocuposciComponent } from './inhabilitarnivelnumerocuposci.component';

describe('InhabilitarnivelnumerocuposciComponent', () => {
  let component: InhabilitarnivelnumerocuposciComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocuposciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocuposciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocuposciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
