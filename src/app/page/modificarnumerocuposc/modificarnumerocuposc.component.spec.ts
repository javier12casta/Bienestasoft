import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnumerocuposcComponent } from './modificarnumerocuposc.component';

describe('ModificarnumerocuposcComponent', () => {
  let component: ModificarnumerocuposcComponent;
  let fixture: ComponentFixture<ModificarnumerocuposcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnumerocuposcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnumerocuposcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
