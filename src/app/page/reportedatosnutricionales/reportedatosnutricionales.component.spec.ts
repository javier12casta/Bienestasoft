import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedatosnutricionalesComponent } from './reportedatosnutricionales.component';

describe('ReportedatosnutricionalesComponent', () => {
  let component: ReportedatosnutricionalesComponent;
  let fixture: ComponentFixture<ReportedatosnutricionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedatosnutricionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedatosnutricionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
