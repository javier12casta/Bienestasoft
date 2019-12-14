import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdatosnutricionalespComponent } from './idatosnutricionalesp.component';

describe('IdatosnutricionalespComponent', () => {
  let component: IdatosnutricionalespComponent;
  let fixture: ComponentFixture<IdatosnutricionalespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdatosnutricionalespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdatosnutricionalespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
