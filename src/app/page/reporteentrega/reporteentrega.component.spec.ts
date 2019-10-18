import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteentregaComponent } from './reporteentrega.component';

describe('ReporteentregaComponent', () => {
  let component: ReporteentregaComponent;
  let fixture: ComponentFixture<ReporteentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
