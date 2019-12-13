import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveldatosnutricionalesComponent } from './niveldatosnutricionales.component';

describe('NiveldatosnutricionalesComponent', () => {
  let component: NiveldatosnutricionalesComponent;
  let fixture: ComponentFixture<NiveldatosnutricionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveldatosnutricionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveldatosnutricionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
