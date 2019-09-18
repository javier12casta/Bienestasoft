import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonaliComponent } from './centrozonali.component';

describe('CentrozonaliComponent', () => {
  let component: CentrozonaliComponent;
  let fixture: ComponentFixture<CentrozonaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
