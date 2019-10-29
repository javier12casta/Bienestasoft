import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocursosvComponent } from './listadocursosv.component';

describe('ListadocursosvComponent', () => {
  let component: ListadocursosvComponent;
  let fixture: ComponentFixture<ListadocursosvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocursosvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocursosvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
