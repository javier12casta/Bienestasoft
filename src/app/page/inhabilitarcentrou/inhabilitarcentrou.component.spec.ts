import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentrouComponent } from './inhabilitarcentrou.component';

describe('InhabilitarcentrouComponent', () => {
  let component: InhabilitarcentrouComponent;
  let fixture: ComponentFixture<InhabilitarcentrouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentrouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentrouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
