import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportepreciosbienestarinaComponent } from './reportepreciosbienestarina.component';

describe('ReportepreciosbienestarinaComponent', () => {
  let component: ReportepreciosbienestarinaComponent;
  let fixture: ComponentFixture<ReportepreciosbienestarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportepreciosbienestarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportepreciosbienestarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
