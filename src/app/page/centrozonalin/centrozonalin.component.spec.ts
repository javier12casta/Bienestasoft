import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonalinComponent } from './centrozonalin.component';

describe('CentrozonalinComponent', () => {
  let component: CentrozonalinComponent;
  let fixture: ComponentFixture<CentrozonalinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonalinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonalinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
