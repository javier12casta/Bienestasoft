import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBeneficiariouiComponent } from './modificar-beneficiarioui.component';

describe('ModificarBeneficiariouiComponent', () => {
  let component: ModificarBeneficiariouiComponent;
  let fixture: ComponentFixture<ModificarBeneficiariouiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarBeneficiariouiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarBeneficiariouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
