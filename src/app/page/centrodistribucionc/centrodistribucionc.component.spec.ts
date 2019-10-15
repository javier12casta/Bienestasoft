import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribucioncComponent } from './centrodistribucionc.component';

describe('CentrodistribucioncComponent', () => {
  let component: CentrodistribucioncComponent;
  let fixture: ComponentFixture<CentrodistribucioncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribucioncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribucioncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
