import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesalidabeneficiarioComponent } from './reportesalidabeneficiario.component';

describe('ReportesalidabeneficiarioComponent', () => {
  let component: ReportesalidabeneficiarioComponent;
  let fixture: ComponentFixture<ReportesalidabeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesalidabeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesalidabeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
