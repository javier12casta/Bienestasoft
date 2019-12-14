import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdatosnutricionalespiComponent } from './idatosnutricionalespi.component';

describe('IdatosnutricionalespiComponent', () => {
  let component: IdatosnutricionalespiComponent;
  let fixture: ComponentFixture<IdatosnutricionalespiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdatosnutricionalespiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdatosnutricionalespiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
