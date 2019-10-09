import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistadocComponent } from './modificarlistadoc.component';

describe('ModificarlistadocComponent', () => {
  let component: ModificarlistadocComponent;
  let fixture: ComponentFixture<ModificarlistadocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistadocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
