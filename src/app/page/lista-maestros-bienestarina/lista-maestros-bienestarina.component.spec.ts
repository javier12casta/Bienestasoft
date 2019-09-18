import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaestrosBienestarinaComponent } from './lista-maestros-bienestarina.component';

describe('ListaMaestrosBienestarinaComponent', () => {
  let component: ListaMaestrosBienestarinaComponent;
  let fixture: ComponentFixture<ListaMaestrosBienestarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaestrosBienestarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaestrosBienestarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
