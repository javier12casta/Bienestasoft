import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedatosvariosComponent } from './reportedatosvarios.component';

describe('ReportedatosvariosComponent', () => {
  let component: ReportedatosvariosComponent;
  let fixture: ComponentFixture<ReportedatosvariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedatosvariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedatosvariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
