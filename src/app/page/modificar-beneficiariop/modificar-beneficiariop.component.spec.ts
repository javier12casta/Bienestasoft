import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBeneficiariopComponent } from './modificar-beneficiariop.component';

describe('ModificarBeneficiariopComponent', () => {
  let component: ModificarBeneficiariopComponent;
  let fixture: ComponentFixture<ModificarBeneficiariopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarBeneficiariopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarBeneficiariopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
