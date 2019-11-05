import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaconsumoComponent } from './salidaconsumo.component';

describe('SalidaconsumoComponent', () => {
  let component: SalidaconsumoComponent;
  let fixture: ComponentFixture<SalidaconsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaconsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaconsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
