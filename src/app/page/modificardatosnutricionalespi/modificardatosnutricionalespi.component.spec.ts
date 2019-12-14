import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosnutricionalespiComponent } from './modificardatosnutricionalespi.component';

describe('ModificardatosnutricionalespiComponent', () => {
  let component: ModificardatosnutricionalespiComponent;
  let fixture: ComponentFixture<ModificardatosnutricionalespiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificardatosnutricionalespiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosnutricionalespiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
