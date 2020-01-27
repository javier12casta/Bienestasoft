import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterecuentoinventarioComponent } from './reporterecuentoinventario.component';

describe('ReporterecuentoinventarioComponent', () => {
  let component: ReporterecuentoinventarioComponent;
  let fixture: ComponentFixture<ReporterecuentoinventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterecuentoinventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterecuentoinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
