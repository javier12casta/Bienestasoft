import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarlistapComponent } from './modificarlistap.component';

describe('ModificarlistapComponent', () => {
  let component: ModificarlistapComponent;
  let fixture: ComponentFixture<ModificarlistapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarlistapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarlistapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
