import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcentromComponent } from './modificarcentrom.component';

describe('ModificarcentromComponent', () => {
  let component: ModificarcentromComponent;
  let fixture: ComponentFixture<ModificarcentromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarcentromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarcentromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
