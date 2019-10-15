import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmacenComponent } from './modificaralmacen.component';

describe('ModificaralmacenComponent', () => {
  let component: ModificaralmacenComponent;
  let fixture: ComponentFixture<ModificaralmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
