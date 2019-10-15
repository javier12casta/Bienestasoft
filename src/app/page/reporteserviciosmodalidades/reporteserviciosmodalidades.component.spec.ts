import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteserviciosmodalidadesComponent } from './reporteserviciosmodalidades.component';

describe('ReporteserviciosmodalidadesComponent', () => {
  let component: ReporteserviciosmodalidadesComponent;
  let fixture: ComponentFixture<ReporteserviciosmodalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteserviciosmodalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteserviciosmodalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
