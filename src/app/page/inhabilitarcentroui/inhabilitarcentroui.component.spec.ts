import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarcentrouiComponent } from './inhabilitarcentroui.component';

describe('InhabilitarcentrouiComponent', () => {
  let component: InhabilitarcentrouiComponent;
  let fixture: ComponentFixture<InhabilitarcentrouiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarcentrouiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarcentrouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
