import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificarusuariosv3mComponent } from './modificarusuariosv3m.component';

describe('Modificarusuariosv3mComponent', () => {
  let component: Modificarusuariosv3mComponent;
  let fixture: ComponentFixture<Modificarusuariosv3mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modificarusuariosv3mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modificarusuariosv3mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
