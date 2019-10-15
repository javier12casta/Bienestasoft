import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaralmacenmComponent } from './modificaralmacenm.component';

describe('ModificaralmacenmComponent', () => {
  let component: ModificaralmacenmComponent;
  let fixture: ComponentFixture<ModificaralmacenmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaralmacenmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaralmacenmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
