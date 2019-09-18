import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosGeneralesBeneficiarioComponent } from './datos-generales-beneficiario.component';

describe('DatosGeneralesBeneficiarioComponent', () => {
  let component: DatosGeneralesBeneficiarioComponent;
  let fixture: ComponentFixture<DatosGeneralesBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosGeneralesBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
