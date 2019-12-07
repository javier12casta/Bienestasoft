import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentropComponent } from './modificarcentrop.component';

describe('ModificarcentropComponent', () => {
  let component: ModificarcentropComponent;
  let fixture: ComponentFixture<ModificarcentropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
