import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosnutricionalesComponent } from './modificardatosnutricionales.component';

describe('ModificardatosnutricionalesComponent', () => {
  let component: ModificardatosnutricionalesComponent;
  let fixture: ComponentFixture<ModificardatosnutricionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificardatosnutricionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosnutricionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
