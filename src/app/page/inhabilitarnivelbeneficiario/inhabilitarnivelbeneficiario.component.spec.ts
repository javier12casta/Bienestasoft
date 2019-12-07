import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarnivelbeneficiarioComponent } from './inhabilitarnivelbeneficiario.component';

describe('InhabilitarnivelbeneficiarioComponent', () => {
  let component: InhabilitarnivelbeneficiarioComponent;
  let fixture: ComponentFixture<InhabilitarnivelbeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarnivelbeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarnivelbeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
