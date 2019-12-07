import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelalmacenComponent } from './nivelalmacen.component';

describe('NivelalmacenComponent', () => {
  let component: NivelalmacenComponent;
  let fixture: ComponentFixture<NivelalmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelalmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
