import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregaComponent } from './puntoentrega.component';

describe('PuntoentregaComponent', () => {
  let component: PuntoentregaComponent;
  let fixture: ComponentFixture<PuntoentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
