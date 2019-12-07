import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosmpComponent } from './beneficiariosmp.component';

describe('BeneficiariosmpComponent', () => {
  let component: BeneficiariosmpComponent;
  let fixture: ComponentFixture<BeneficiariosmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariosmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
