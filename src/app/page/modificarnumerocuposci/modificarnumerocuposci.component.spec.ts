import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnumerocuposciComponent } from './modificarnumerocuposci.component';

describe('ModificarnumerocuposciComponent', () => {
  let component: ModificarnumerocuposciComponent;
  let fixture: ComponentFixture<ModificarnumerocuposciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnumerocuposciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnumerocuposciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
