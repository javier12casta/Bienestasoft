import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosmpiComponent } from './beneficiariosmpi.component';

describe('BeneficiariosmpiComponent', () => {
  let component: BeneficiariosmpiComponent;
  let fixture: ComponentFixture<BeneficiariosmpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariosmpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosmpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
