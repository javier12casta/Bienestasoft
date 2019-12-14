import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistadocursospiComponent } from './modificarlistadocursospi.component';

describe('ModificarlistadocursospiComponent', () => {
  let component: ModificarlistadocursospiComponent;
  let fixture: ComponentFixture<ModificarlistadocursospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistadocursospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistadocursospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
