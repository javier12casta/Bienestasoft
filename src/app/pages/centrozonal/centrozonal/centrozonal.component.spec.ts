import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonalComponent } from './centrozonal.component';

describe('CentrozonalComponent', () => {
  let component: CentrozonalComponent;
  let fixture: ComponentFixture<CentrozonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
