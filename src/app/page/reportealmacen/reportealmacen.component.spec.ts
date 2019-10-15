import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportealmacenComponent } from './reportealmacen.component';

describe('ReportealmacenComponent', () => {
  let component: ReportealmacenComponent;
  let fixture: ComponentFixture<ReportealmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportealmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportealmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
