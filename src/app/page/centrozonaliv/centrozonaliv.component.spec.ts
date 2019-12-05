import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonalivComponent } from './centrozonaliv.component';

describe('CentrozonalivComponent', () => {
  let component: CentrozonalivComponent;
  let fixture: ComponentFixture<CentrozonalivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonalivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonalivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
