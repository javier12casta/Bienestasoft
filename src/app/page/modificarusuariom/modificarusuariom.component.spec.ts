import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarusuariomComponent } from './modificarusuariom.component';

describe('ModificarusuariomComponent', () => {
  let component: ModificarusuariomComponent;
  let fixture: ComponentFixture<ModificarusuariomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarusuariomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarusuariomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
