import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdatosnutricionalesuiComponent } from './idatosnutricionalesui.component';

describe('IdatosnutricionalesuiComponent', () => {
  let component: IdatosnutricionalesuiComponent;
  let fixture: ComponentFixture<IdatosnutricionalesuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdatosnutricionalesuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdatosnutricionalesuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
