import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmaceniComponent } from './modificaralmaceni.component';

describe('ModificaralmaceniComponent', () => {
  let component: ModificaralmaceniComponent;
  let fixture: ComponentFixture<ModificaralmaceniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmaceniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmaceniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
