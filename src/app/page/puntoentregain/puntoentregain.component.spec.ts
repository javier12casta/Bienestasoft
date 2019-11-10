import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregainComponent } from './puntoentregain.component';

describe('PuntoentregainComponent', () => {
  let component: PuntoentregainComponent;
  let fixture: ComponentFixture<PuntoentregainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
