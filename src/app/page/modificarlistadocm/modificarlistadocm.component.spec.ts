import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistadocmComponent } from './modificarlistadocm.component';

describe('ModificarlistadocmComponent', () => {
  let component: ModificarlistadocmComponent;
  let fixture: ComponentFixture<ModificarlistadocmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistadocmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistadocmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
