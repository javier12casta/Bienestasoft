import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsmComponent } from './udsm.component';

describe('UdsmComponent', () => {
  let component: UdsmComponent;
  let fixture: ComponentFixture<UdsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
