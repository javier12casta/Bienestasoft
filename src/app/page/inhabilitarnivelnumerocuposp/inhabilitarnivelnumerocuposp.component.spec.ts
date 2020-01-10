import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocupospComponent } from './inhabilitarnivelnumerocuposp.component';

describe('InhabilitarnivelnumerocupospComponent', () => {
  let component: InhabilitarnivelnumerocupospComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocupospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocupospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocupospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
