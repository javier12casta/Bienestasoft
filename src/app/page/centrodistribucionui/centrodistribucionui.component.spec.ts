import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribucionuiComponent } from './centrodistribucionui.component';

describe('CentrodistribucionuiComponent', () => {
  let component: CentrodistribucionuiComponent;
  let fixture: ComponentFixture<CentrodistribucionuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribucionuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribucionuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
