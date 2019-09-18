import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcudientesComponent } from './acudientes.component';

describe('AcudientesComponent', () => {
  let component: AcudientesComponent;
  let fixture: ComponentFixture<AcudientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcudientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcudientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
