import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmacenuComponent } from './modificaralmacenu.component';

describe('ModificaralmacenuComponent', () => {
  let component: ModificaralmacenuComponent;
  let fixture: ComponentFixture<ModificaralmacenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmacenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmacenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
