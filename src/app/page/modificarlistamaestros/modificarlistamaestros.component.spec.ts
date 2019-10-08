import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistamaestrosComponent } from './modificarlistamaestros.component';

describe('ModificarlistamaestrosComponent', () => {
  let component: ModificarlistamaestrosComponent;
  let fixture: ComponentFixture<ModificarlistamaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistamaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistamaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
