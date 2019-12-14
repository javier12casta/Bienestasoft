import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocursosuiComponent } from './listadocursosui.component';

describe('ListadocursosuiComponent', () => {
  let component: ListadocursosuiComponent;
  let fixture: ComponentFixture<ListadocursosuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocursosuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocursosuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
