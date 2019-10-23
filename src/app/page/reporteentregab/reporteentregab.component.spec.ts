import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteentregabComponent } from './reporteentregab.component';

describe('ReporteentregabComponent', () => {
  let component: ReporteentregabComponent;
  let fixture: ComponentFixture<ReporteentregabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteentregabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteentregabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
