import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvariosComponent } from './datosvarios.component';

describe('DatosvariosComponent', () => {
  let component: DatosvariosComponent;
  let fixture: ComponentFixture<DatosvariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosvariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
