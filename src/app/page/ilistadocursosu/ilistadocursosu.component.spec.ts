import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlistadocursosuComponent } from './ilistadocursosu.component';

describe('IlistadocursosuComponent', () => {
  let component: IlistadocursosuComponent;
  let fixture: ComponentFixture<IlistadocursosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlistadocursosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlistadocursosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
