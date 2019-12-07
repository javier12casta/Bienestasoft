import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmacenpiComponent } from './modificaralmacenpi.component';

describe('ModificaralmacenpiComponent', () => {
  let component: ModificaralmacenpiComponent;
  let fixture: ComponentFixture<ModificaralmacenpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmacenpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmacenpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
