import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsiComponent } from './udsi.component';

describe('UdsiComponent', () => {
  let component: UdsiComponent;
  let fixture: ComponentFixture<UdsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
