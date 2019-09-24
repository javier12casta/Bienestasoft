import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaestrosBienestarinaModificarComponent } from './lista-maestros-bienestarina-modificar.component';

describe('ListaMaestrosBienestarinaModificarComponent', () => {
  let component: ListaMaestrosBienestarinaModificarComponent;
  let fixture: ComponentFixture<ListaMaestrosBienestarinaModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaestrosBienestarinaModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaestrosBienestarinaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
