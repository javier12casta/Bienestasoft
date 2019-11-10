import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsinComponent } from './udsin.component';

describe('UdsinComponent', () => {
  let component: UdsinComponent;
  let fixture: ComponentFixture<UdsinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
