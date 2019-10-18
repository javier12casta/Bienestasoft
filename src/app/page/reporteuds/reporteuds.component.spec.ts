import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteudsComponent } from './reporteuds.component';

describe('ReporteudsComponent', () => {
  let component: ReporteudsComponent;
  let fixture: ComponentFixture<ReporteudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
