import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosnutricionalesmComponent } from './modificardatosnutricionalesm.component';

describe('ModificardatosnutricionalesmComponent', () => {
  let component: ModificardatosnutricionalesmComponent;
  let fixture: ComponentFixture<ModificardatosnutricionalesmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificardatosnutricionalesmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosnutricionalesmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
