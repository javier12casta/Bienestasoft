import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosnutricionalespComponent } from './modificardatosnutricionalesp.component';

describe('ModificardatosnutricionalespComponent', () => {
  let component: ModificardatosnutricionalespComponent;
  let fixture: ComponentFixture<ModificardatosnutricionalespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificardatosnutricionalespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosnutricionalespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
