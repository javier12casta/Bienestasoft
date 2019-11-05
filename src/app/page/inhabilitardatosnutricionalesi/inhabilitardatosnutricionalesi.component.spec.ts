import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitardatosnutricionalesiComponent } from './inhabilitardatosnutricionalesi.component';

describe('InhabilitardatosnutricionalesiComponent', () => {
  let component: InhabilitardatosnutricionalesiComponent;
  let fixture: ComponentFixture<InhabilitardatosnutricionalesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitardatosnutricionalesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitardatosnutricionalesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
