import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionaliComponent } from './regionali.component';

describe('RegionaliComponent', () => {
  let component: RegionaliComponent;
  let fixture: ComponentFixture<RegionaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
