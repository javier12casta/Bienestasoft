import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionescComponent } from './devolucionesc.component';

describe('DevolucionescComponent', () => {
  let component: DevolucionescComponent;
  let fixture: ComponentFixture<DevolucionescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
