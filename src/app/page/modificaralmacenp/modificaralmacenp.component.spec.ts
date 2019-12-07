import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmacenpComponent } from './modificaralmacenp.component';

describe('ModificaralmacenpComponent', () => {
  let component: ModificaralmacenpComponent;
  let fixture: ComponentFixture<ModificaralmacenpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmacenpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmacenpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
