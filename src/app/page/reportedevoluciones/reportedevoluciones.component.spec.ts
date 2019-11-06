import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedevolucionesComponent } from './reportedevoluciones.component';

describe('ReportedevolucionesComponent', () => {
  let component: ReportedevolucionesComponent;
  let fixture: ComponentFixture<ReportedevolucionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedevolucionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
