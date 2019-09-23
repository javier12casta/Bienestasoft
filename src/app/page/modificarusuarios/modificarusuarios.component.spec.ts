import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarusuariosComponent } from './modificarusuarios.component';

describe('ModificarusuariosComponent', () => {
  let component: ModificarusuariosComponent;
  let fixture: ComponentFixture<ModificarusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
