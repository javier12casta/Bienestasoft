import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregaiComponent } from './puntoentregai.component';

describe('PuntoentregaiComponent', () => {
  let component: PuntoentregaiComponent;
  let fixture: ComponentFixture<PuntoentregaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
