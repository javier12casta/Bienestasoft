import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContactoUsuarioComponent } from './datos-contacto-usuario.component';

describe('DatosContactoUsuarioComponent', () => {
  let component: DatosContactoUsuarioComponent;
  let fixture: ComponentFixture<DatosContactoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosContactoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosContactoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
