import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportecentrodistribucionComponent } from './reportecentrodistribucion.component';

describe('ReportecentrodistribucionComponent', () => {
  let component: ReportecentrodistribucionComponent;
  let fixture: ComponentFixture<ReportecentrodistribucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportecentrodistribucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportecentrodistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
