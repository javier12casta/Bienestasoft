import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocursosuComponent } from './listadocursosu.component';

describe('ListadocursosuComponent', () => {
  let component: ListadocursosuComponent;
  let fixture: ComponentFixture<ListadocursosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocursosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocursosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
