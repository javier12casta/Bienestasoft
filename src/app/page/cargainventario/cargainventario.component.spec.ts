import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargainventarioComponent } from './cargainventario.component';

describe('CargainventarioComponent', () => {
  let component: CargainventarioComponent;
  let fixture: ComponentFixture<CargainventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargainventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargainventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
