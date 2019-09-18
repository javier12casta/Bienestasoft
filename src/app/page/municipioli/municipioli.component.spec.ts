import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioliComponent } from './municipioli.component';

describe('MunicipioliComponent', () => {
  let component: MunicipioliComponent;
  let fixture: ComponentFixture<MunicipioliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipioliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
