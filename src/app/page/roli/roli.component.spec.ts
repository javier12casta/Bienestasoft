import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoliComponent } from './roli.component';

describe('RoliComponent', () => {
  let component: RoliComponent;
  let fixture: ComponentFixture<RoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
