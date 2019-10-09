import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarserviciommComponent } from './modificarserviciomm.component';

describe('ModificarserviciommComponent', () => {
  let component: ModificarserviciommComponent;
  let fixture: ComponentFixture<ModificarserviciommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarserviciommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarserviciommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
