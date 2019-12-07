import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribuciondComponent } from './centrodistribuciond.component';

describe('CentrodistribuciondComponent', () => {
  let component: CentrodistribuciondComponent;
  let fixture: ComponentFixture<CentrodistribuciondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribuciondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribuciondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
