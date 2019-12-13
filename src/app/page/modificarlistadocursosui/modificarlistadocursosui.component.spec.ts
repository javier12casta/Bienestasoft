import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistadocursosuiComponent } from './modificarlistadocursosui.component';

describe('ModificarlistadocursosuiComponent', () => {
  let component: ModificarlistadocursosuiComponent;
  let fixture: ComponentFixture<ModificarlistadocursosuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistadocursosuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistadocursosuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
