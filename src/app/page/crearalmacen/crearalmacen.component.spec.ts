import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearalmacenComponent } from './crearalmacen.component';

describe('CrearalmacenComponent', () => {
  let component: CrearalmacenComponent;
  let fixture: ComponentFixture<CrearalmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearalmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
