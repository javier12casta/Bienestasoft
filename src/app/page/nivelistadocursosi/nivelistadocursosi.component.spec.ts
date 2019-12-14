import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelistadocursosiComponent } from './nivelistadocursosi.component';

describe('NivelistadocursosiComponent', () => {
  let component: NivelistadocursosiComponent;
  let fixture: ComponentFixture<NivelistadocursosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelistadocursosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelistadocursosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
