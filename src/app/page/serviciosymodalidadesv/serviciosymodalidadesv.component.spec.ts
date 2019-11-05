import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosymodalidadesvComponent } from './serviciosymodalidadesv.component';

describe('ServiciosymodalidadesvComponent', () => {
  let component: ServiciosymodalidadesvComponent;
  let fixture: ComponentFixture<ServiciosymodalidadesvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosymodalidadesvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosymodalidadesvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
