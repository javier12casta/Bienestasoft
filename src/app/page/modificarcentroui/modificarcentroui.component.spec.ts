import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentrouiComponent } from './modificarcentroui.component';

describe('ModificarcentrouiComponent', () => {
  let component: ModificarcentrouiComponent;
  let fixture: ComponentFixture<ModificarcentrouiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentrouiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentrouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
