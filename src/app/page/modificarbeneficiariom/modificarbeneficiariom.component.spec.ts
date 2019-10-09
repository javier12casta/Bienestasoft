import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarbeneficiariomComponent } from './modificarbeneficiariom.component';

describe('ModificarbeneficiariomComponent', () => {
  let component: ModificarbeneficiariomComponent;
  let fixture: ComponentFixture<ModificarbeneficiariomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarbeneficiariomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarbeneficiariomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
