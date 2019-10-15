import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportereferenciabienestarinaComponent } from './reportereferenciabienestarina.component';

describe('ReportereferenciabienestarinaComponent', () => {
  let component: ReportereferenciabienestarinaComponent;
  let fixture: ComponentFixture<ReportereferenciabienestarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportereferenciabienestarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportereferenciabienestarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
