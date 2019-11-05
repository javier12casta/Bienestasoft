import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitardatosnutricionalesComponent } from './inhabilitardatosnutricionales.component';

describe('InhabilitardatosnutricionalesComponent', () => {
  let component: InhabilitardatosnutricionalesComponent;
  let fixture: ComponentFixture<InhabilitardatosnutricionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitardatosnutricionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitardatosnutricionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
