import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelbeneficiarioComponent } from './nivelbeneficiario.component';

describe('NivelbeneficiarioComponent', () => {
  let component: NivelbeneficiarioComponent;
  let fixture: ComponentFixture<NivelbeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelbeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelbeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
