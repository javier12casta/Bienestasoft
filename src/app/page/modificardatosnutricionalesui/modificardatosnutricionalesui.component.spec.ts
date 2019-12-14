import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosnutricionalesuiComponent } from './modificardatosnutricionalesui.component';

describe('ModificardatosnutricionalesuiComponent', () => {
  let component: ModificardatosnutricionalesuiComponent;
  let fixture: ComponentFixture<ModificardatosnutricionalesuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificardatosnutricionalesuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosnutricionalesuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
