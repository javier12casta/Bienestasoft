import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvariosvComponent } from './datosvariosv.component';

describe('DatosvariosvComponent', () => {
  let component: DatosvariosvComponent;
  let fixture: ComponentFixture<DatosvariosvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosvariosvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvariosvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
