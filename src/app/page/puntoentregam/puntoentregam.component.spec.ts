import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregamComponent } from './puntoentregam.component';

describe('PuntoentregamComponent', () => {
  let component: PuntoentregamComponent;
  let fixture: ComponentFixture<PuntoentregamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
