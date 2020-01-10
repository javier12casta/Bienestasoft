import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelnumerocuposcComponent } from './inhabilitarnivelnumerocuposc.component';

describe('InhabilitarnivelnumerocuposcComponent', () => {
  let component: InhabilitarnivelnumerocuposcComponent;
  let fixture: ComponentFixture<InhabilitarnivelnumerocuposcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelnumerocuposcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelnumerocuposcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
