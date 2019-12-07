import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribucionpiComponent } from './centrodistribucionpi.component';

describe('CentrodistribucionpiComponent', () => {
  let component: CentrodistribucionpiComponent;
  let fixture: ComponentFixture<CentrodistribucionpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribucionpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribucionpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
