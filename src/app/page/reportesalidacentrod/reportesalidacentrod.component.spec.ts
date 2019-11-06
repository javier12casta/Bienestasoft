import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesalidacentrodComponent } from './reportesalidacentrod.component';

describe('ReportesalidacentrodComponent', () => {
  let component: ReportesalidacentrodComponent;
  let fixture: ComponentFixture<ReportesalidacentrodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesalidacentrodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesalidacentrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
