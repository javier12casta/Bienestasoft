import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnumerocuposuComponent } from './modificarnumerocuposu.component';

describe('ModificarnumerocuposuComponent', () => {
  let component: ModificarnumerocuposuComponent;
  let fixture: ComponentFixture<ModificarnumerocuposuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnumerocuposuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnumerocuposuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
