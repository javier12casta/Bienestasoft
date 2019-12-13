import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelistadocursosComponent } from './nivelistadocursos.component';

describe('NivelistadocursosComponent', () => {
  let component: NivelistadocursosComponent;
  let fixture: ComponentFixture<NivelistadocursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelistadocursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelistadocursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
