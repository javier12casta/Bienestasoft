import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterecepcionComponent } from './reporterecepcion.component';

describe('ReporterecepcionComponent', () => {
  let component: ReporterecepcionComponent;
  let fixture: ComponentFixture<ReporterecepcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterecepcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
