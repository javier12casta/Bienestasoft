import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmacenuiComponent } from './modificaralmacenui.component';

describe('ModificaralmacenuiComponent', () => {
  let component: ModificaralmacenuiComponent;
  let fixture: ComponentFixture<ModificaralmacenuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmacenuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmacenuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
