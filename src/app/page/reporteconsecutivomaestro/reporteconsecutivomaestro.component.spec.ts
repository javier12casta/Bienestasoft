import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteconsecutivomaestroComponent } from './reporteconsecutivomaestro.component';

describe('ReporteconsecutivomaestroComponent', () => {
  let component: ReporteconsecutivomaestroComponent;
  let fixture: ComponentFixture<ReporteconsecutivomaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteconsecutivomaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteconsecutivomaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
