import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportelistadocursosComponent } from './reportelistadocursos.component';

describe('ReportelistadocursosComponent', () => {
  let component: ReportelistadocursosComponent;
  let fixture: ComponentFixture<ReportelistadocursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportelistadocursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportelistadocursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
