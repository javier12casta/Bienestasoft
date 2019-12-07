import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBeneficiariouComponent } from './modificar-beneficiariou.component';

describe('ModificarBeneficiariouComponent', () => {
  let component: ModificarBeneficiariouComponent;
  let fixture: ComponentFixture<ModificarBeneficiariouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarBeneficiariouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarBeneficiariouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
