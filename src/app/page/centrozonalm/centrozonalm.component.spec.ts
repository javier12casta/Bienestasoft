import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonalmComponent } from './centrozonalm.component';

describe('CentrozonalmComponent', () => {
  let component: CentrozonalmComponent;
  let fixture: ComponentFixture<CentrozonalmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonalmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
