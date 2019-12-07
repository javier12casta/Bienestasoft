import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBeneficiariopiComponent } from './modificar-beneficiariopi.component';

describe('ModificarBeneficiariopiComponent', () => {
  let component: ModificarBeneficiariopiComponent;
  let fixture: ComponentFixture<ModificarBeneficiariopiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarBeneficiariopiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarBeneficiariopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
