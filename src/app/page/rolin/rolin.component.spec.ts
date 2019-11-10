import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolinComponent } from './rolin.component';

describe('RolinComponent', () => {
  let component: RolinComponent;
  let fixture: ComponentFixture<RolinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
