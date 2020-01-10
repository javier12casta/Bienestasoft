import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocupospComponent } from './numerocuposp.component';

describe('NumerocupospComponent', () => {
  let component: NumerocupospComponent;
  let fixture: ComponentFixture<NumerocupospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerocupospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocupospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
