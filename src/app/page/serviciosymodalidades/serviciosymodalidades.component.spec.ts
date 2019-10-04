import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosymodalidadesComponent } from './serviciosymodalidades.component';

describe('ServiciosymodalidadesComponent', () => {
  let component: ServiciosymodalidadesComponent;
  let fixture: ComponentFixture<ServiciosymodalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosymodalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosymodalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
