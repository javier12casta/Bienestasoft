import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentrodComponent } from './modificarcentrod.component';

describe('ModificarcentrodComponent', () => {
  let component: ModificarcentrodComponent;
  let fixture: ComponentFixture<ModificarcentrodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentrodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
