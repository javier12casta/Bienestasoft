import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdatosnutricionalesuComponent } from './idatosnutricionalesu.component';

describe('IdatosnutricionalesuComponent', () => {
  let component: IdatosnutricionalesuComponent;
  let fixture: ComponentFixture<IdatosnutricionalesuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdatosnutricionalesuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdatosnutricionalesuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
