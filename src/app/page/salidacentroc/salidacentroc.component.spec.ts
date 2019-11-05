import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidacentrocComponent } from './salidacentroc.component';

describe('SalidacentrocComponent', () => {
  let component: SalidacentrocComponent;
  let fixture: ComponentFixture<SalidacentrocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidacentrocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidacentrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
