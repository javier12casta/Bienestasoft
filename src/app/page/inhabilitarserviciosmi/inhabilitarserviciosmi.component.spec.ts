import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarserviciosmiComponent } from './inhabilitarserviciosmi.component';

describe('InhabilitarserviciosmiComponent', () => {
  let component: InhabilitarserviciosmiComponent;
  let fixture: ComponentFixture<InhabilitarserviciosmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarserviciosmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarserviciosmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
