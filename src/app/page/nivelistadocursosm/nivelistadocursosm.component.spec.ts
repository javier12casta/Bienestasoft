import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelistadocursosmComponent } from './nivelistadocursosm.component';

describe('NivelistadocursosmComponent', () => {
  let component: NivelistadocursosmComponent;
  let fixture: ComponentFixture<NivelistadocursosmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelistadocursosmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelistadocursosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
