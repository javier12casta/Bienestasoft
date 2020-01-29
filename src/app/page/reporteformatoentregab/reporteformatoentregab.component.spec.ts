import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteformatoentregabComponent } from './reporteformatoentregab.component';

describe('ReporteformatoentregabComponent', () => {
  let component: ReporteformatoentregabComponent;
  let fixture: ComponentFixture<ReporteformatoentregabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteformatoentregabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteformatoentregabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
