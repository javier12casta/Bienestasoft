import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportebeneficiarioComponent } from './reportebeneficiario.component';

describe('ReportebeneficiarioComponent', () => {
  let component: ReportebeneficiarioComponent;
  let fixture: ComponentFixture<ReportebeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportebeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportebeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
