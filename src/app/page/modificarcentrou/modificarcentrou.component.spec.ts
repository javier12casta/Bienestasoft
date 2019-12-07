import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentrouComponent } from './modificarcentrou.component';

describe('ModificarcentrouComponent', () => {
  let component: ModificarcentrouComponent;
  let fixture: ComponentFixture<ModificarcentrouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentrouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentrouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
