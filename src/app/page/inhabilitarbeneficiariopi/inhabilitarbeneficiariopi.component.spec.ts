import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarbeneficiariopiComponent } from './inhabilitarbeneficiariopi.component';

describe('InhabilitarbeneficiariopiComponent', () => {
  let component: InhabilitarbeneficiariopiComponent;
  let fixture: ComponentFixture<InhabilitarbeneficiariopiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarbeneficiariopiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarbeneficiariopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
