import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoscontactobeneficiarioComponent } from './datoscontactobeneficiario.component';

describe('DatoscontactobeneficiarioComponent', () => {
  let component: DatoscontactobeneficiarioComponent;
  let fixture: ComponentFixture<DatoscontactobeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoscontactobeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoscontactobeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
