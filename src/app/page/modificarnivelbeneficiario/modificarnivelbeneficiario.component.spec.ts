import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnivelbeneficiarioComponent } from './modificarnivelbeneficiario.component';

describe('ModificarnivelbeneficiarioComponent', () => {
  let component: ModificarnivelbeneficiarioComponent;
  let fixture: ComponentFixture<ModificarnivelbeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnivelbeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnivelbeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
