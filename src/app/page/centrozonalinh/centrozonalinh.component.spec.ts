import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonalinhComponent } from './centrozonalinh.component';

describe('CentrozonalinhComponent', () => {
  let component: CentrozonalinhComponent;
  let fixture: ComponentFixture<CentrozonalinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonalinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonalinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
