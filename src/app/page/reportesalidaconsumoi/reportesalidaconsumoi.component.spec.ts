import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesalidaconsumoiComponent } from './reportesalidaconsumoi.component';

describe('ReportesalidaconsumoiComponent', () => {
  let component: ReportesalidaconsumoiComponent;
  let fixture: ComponentFixture<ReportesalidaconsumoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesalidaconsumoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesalidaconsumoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
