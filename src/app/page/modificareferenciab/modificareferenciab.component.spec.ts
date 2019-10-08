import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareferenciabComponent } from './modificareferenciab.component';

describe('ModificareferenciabComponent', () => {
  let component: ModificareferenciabComponent;
  let fixture: ComponentFixture<ModificareferenciabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificareferenciabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificareferenciabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
