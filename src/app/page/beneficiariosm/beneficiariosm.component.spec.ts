import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosmComponent } from './beneficiariosm.component';

describe('BeneficiariosmComponent', () => {
  let component: BeneficiariosmComponent;
  let fixture: ComponentFixture<BeneficiariosmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariosmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
