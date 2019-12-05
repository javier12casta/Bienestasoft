import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsvComponent } from './udsv.component';

describe('UdsvComponent', () => {
  let component: UdsvComponent;
  let fixture: ComponentFixture<UdsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
