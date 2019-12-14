import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistadocursospComponent } from './modificarlistadocursosp.component';

describe('ModificarlistadocursospComponent', () => {
  let component: ModificarlistadocursospComponent;
  let fixture: ComponentFixture<ModificarlistadocursospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistadocursospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistadocursospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
