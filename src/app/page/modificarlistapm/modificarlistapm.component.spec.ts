import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistapmComponent } from './modificarlistapm.component';

describe('ModificarlistapmComponent', () => {
  let component: ModificarlistapmComponent;
  let fixture: ComponentFixture<ModificarlistapmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistapmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
