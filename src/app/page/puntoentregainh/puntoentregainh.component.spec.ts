import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregainhComponent } from './puntoentregainh.component';

describe('PuntoentregainhComponent', () => {
  let component: PuntoentregainhComponent;
  let fixture: ComponentFixture<PuntoentregainhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregainhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregainhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
