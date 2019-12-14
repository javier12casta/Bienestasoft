import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvariospiComponent } from './datosvariospi.component';

describe('DatosvariospiComponent', () => {
  let component: DatosvariospiComponent;
  let fixture: ComponentFixture<DatosvariospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosvariospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvariospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
