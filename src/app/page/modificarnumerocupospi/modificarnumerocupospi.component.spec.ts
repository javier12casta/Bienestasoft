import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnumerocupospiComponent } from './modificarnumerocupospi.component';

describe('ModificarnumerocupospiComponent', () => {
  let component: ModificarnumerocupospiComponent;
  let fixture: ComponentFixture<ModificarnumerocupospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnumerocupospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnumerocupospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
