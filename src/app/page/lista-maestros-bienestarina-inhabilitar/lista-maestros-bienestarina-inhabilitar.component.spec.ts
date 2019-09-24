import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaestrosBienestarinaInhabilitarComponent } from './lista-maestros-bienestarina-inhabilitar.component';

describe('ListaMaestrosBienestarinaInhabilitarComponent', () => {
  let component: ListaMaestrosBienestarinaInhabilitarComponent;
  let fixture: ComponentFixture<ListaMaestrosBienestarinaInhabilitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaestrosBienestarinaInhabilitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaestrosBienestarinaInhabilitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
