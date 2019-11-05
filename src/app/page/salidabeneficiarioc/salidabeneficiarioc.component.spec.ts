import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidabeneficiariocComponent } from './salidabeneficiarioc.component';

describe('SalidabeneficiariocComponent', () => {
  let component: SalidabeneficiariocComponent;
  let fixture: ComponentFixture<SalidabeneficiariocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidabeneficiariocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidabeneficiariocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
