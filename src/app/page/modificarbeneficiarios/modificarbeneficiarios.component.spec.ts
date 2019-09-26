import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarbeneficiariosComponent } from './modificarbeneficiarios.component';

describe('ModificarbeneficiariosComponent', () => {
  let component: ModificarbeneficiariosComponent;
  let fixture: ComponentFixture<ModificarbeneficiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarbeneficiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarbeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
