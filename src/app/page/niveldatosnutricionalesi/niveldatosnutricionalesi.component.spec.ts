import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveldatosnutricionalesiComponent } from './niveldatosnutricionalesi.component';

describe('NiveldatosnutricionalesiComponent', () => {
  let component: NiveldatosnutricionalesiComponent;
  let fixture: ComponentFixture<NiveldatosnutricionalesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveldatosnutricionalesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveldatosnutricionalesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
