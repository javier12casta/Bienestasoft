import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveldatosnutricionalesmComponent } from './niveldatosnutricionalesm.component';

describe('NiveldatosnutricionalesmComponent', () => {
  let component: NiveldatosnutricionalesmComponent;
  let fixture: ComponentFixture<NiveldatosnutricionalesmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveldatosnutricionalesmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveldatosnutricionalesmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
