import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerocuposcComponent } from './numerocuposc.component';

describe('NumerocuposcComponent', () => {
  let component: NumerocuposcComponent;
  let fixture: ComponentFixture<NumerocuposcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerocuposcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerocuposcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
