import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnumerocupospComponent } from './modificarnumerocuposp.component';

describe('ModificarnumerocupospComponent', () => {
  let component: ModificarnumerocupospComponent;
  let fixture: ComponentFixture<ModificarnumerocupospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnumerocupospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnumerocupospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
