import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarserviciosmComponent } from './inhabilitarserviciosm.component';

describe('InhabilitarserviciosmComponent', () => {
  let component: InhabilitarserviciosmComponent;
  let fixture: ComponentFixture<InhabilitarserviciosmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarserviciosmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarserviciosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
