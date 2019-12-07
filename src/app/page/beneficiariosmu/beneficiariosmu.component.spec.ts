import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosmuComponent } from './beneficiariosmu.component';

describe('BeneficiariosmuComponent', () => {
  let component: BeneficiariosmuComponent;
  let fixture: ComponentFixture<BeneficiariosmuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariosmuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
