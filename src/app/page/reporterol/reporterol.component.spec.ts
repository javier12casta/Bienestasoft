import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterolComponent } from './reporterol.component';

describe('ReporterolComponent', () => {
  let component: ReporterolComponent;
  let fixture: ComponentFixture<ReporterolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporterolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
