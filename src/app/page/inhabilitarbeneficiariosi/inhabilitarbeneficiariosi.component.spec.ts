import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarbeneficiariosiComponent } from './inhabilitarbeneficiariosi.component';

describe('InhabilitarbeneficiariosiComponent', () => {
  let component: InhabilitarbeneficiariosiComponent;
  let fixture: ComponentFixture<InhabilitarbeneficiariosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarbeneficiariosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarbeneficiariosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
