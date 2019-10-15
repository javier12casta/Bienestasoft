import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribucionciComponent } from './centrodistribucionci.component';

describe('CentrodistribucionciComponent', () => {
  let component: CentrodistribucionciComponent;
  let fixture: ComponentFixture<CentrodistribucionciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribucionciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribucionciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
