import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentrodiComponent } from './modificarcentrodi.component';

describe('ModificarcentrodiComponent', () => {
  let component: ModificarcentrodiComponent;
  let fixture: ComponentFixture<ModificarcentrodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentrodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentrodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
