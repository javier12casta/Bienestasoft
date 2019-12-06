import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modificarusuariosv2mComponent } from './modificarusuariosv2m.component';

describe('Modificarusuariosv2mComponent', () => {
  let component: Modificarusuariosv2mComponent;
  let fixture: ComponentFixture<Modificarusuariosv2mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modificarusuariosv2mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modificarusuariosv2mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
