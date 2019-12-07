import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentropiComponent } from './modificarcentropi.component';

describe('ModificarcentropiComponent', () => {
  let component: ModificarcentropiComponent;
  let fixture: ComponentFixture<ModificarcentropiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentropiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentropiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
