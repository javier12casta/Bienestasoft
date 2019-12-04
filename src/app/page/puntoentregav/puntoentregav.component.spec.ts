import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregavComponent } from './puntoentregav.component';

describe('PuntoentregavComponent', () => {
  let component: PuntoentregavComponent;
  let fixture: ComponentFixture<PuntoentregavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
