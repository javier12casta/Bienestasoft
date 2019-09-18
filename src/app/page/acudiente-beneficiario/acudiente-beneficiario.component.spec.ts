import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcudienteBeneficiarioComponent } from './acudiente-beneficiario.component';

describe('AcudienteBeneficiarioComponent', () => {
  let component: AcudienteBeneficiarioComponent;
  let fixture: ComponentFixture<AcudienteBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcudienteBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcudienteBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
