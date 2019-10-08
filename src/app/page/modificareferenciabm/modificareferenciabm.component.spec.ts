import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareferenciabmComponent } from './modificareferenciabm.component';

describe('ModificareferenciabmComponent', () => {
  let component: ModificareferenciabmComponent;
  let fixture: ComponentFixture<ModificareferenciabmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificareferenciabmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificareferenciabmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
