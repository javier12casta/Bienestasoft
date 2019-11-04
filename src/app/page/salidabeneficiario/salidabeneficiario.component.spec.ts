import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidabeneficiarioComponent } from './salidabeneficiario.component';

describe('SalidabeneficiarioComponent', () => {
  let component: SalidabeneficiarioComponent;
  let fixture: ComponentFixture<SalidabeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidabeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidabeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
