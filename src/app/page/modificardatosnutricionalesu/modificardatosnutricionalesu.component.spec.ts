import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificardatosnutricionalesuComponent } from './modificardatosnutricionalesu.component';

describe('ModificardatosnutricionalesuComponent', () => {
  let component: ModificardatosnutricionalesuComponent;
  let fixture: ComponentFixture<ModificardatosnutricionalesuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificardatosnutricionalesuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificardatosnutricionalesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
