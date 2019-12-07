import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosmuiComponent } from './beneficiariosmui.component';

describe('BeneficiariosmuiComponent', () => {
  let component: BeneficiariosmuiComponent;
  let fixture: ComponentFixture<BeneficiariosmuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiariosmuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosmuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
