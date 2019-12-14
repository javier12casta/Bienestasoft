import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlistadocursosuiComponent } from './ilistadocursosui.component';

describe('IlistadocursosuiComponent', () => {
  let component: IlistadocursosuiComponent;
  let fixture: ComponentFixture<IlistadocursosuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlistadocursosuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlistadocursosuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
