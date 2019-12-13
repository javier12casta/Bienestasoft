import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistadocursosuComponent } from './modificarlistadocursosu.component';

describe('ModificarlistadocursosuComponent', () => {
  let component: ModificarlistadocursosuComponent;
  let fixture: ComponentFixture<ModificarlistadocursosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistadocursosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistadocursosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
