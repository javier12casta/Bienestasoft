import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocuposciComponent } from './numerocuposci.component';

describe('NumerocuposciComponent', () => {
  let component: NumerocuposciComponent;
  let fixture: ComponentFixture<NumerocuposciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerocuposciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocuposciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
