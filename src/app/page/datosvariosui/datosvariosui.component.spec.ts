import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvariosuiComponent } from './datosvariosui.component';

describe('DatosvariosuiComponent', () => {
  let component: DatosvariosuiComponent;
  let fixture: ComponentFixture<DatosvariosuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosvariosuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvariosuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
