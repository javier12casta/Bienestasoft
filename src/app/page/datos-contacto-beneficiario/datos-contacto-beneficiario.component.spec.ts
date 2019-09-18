import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContactoBeneficiarioComponent } from './datos-contacto-beneficiario.component';

describe('DatosContactoBeneficiarioComponent', () => {
  let component: DatosContactoBeneficiarioComponent;
  let fixture: ComponentFixture<DatosContactoBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosContactoBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosContactoBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
