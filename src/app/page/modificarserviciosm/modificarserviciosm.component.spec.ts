import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarserviciosmComponent } from './modificarserviciosm.component';

describe('ModificarserviciosmComponent', () => {
  let component: ModificarserviciosmComponent;
  let fixture: ComponentFixture<ModificarserviciosmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarserviciosmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarserviciosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
