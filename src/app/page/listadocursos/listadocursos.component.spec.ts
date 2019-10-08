import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocursosComponent } from './listadocursos.component';

describe('ListadocursosComponent', () => {
  let component: ListadocursosComponent;
  let fixture: ComponentFixture<ListadocursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
