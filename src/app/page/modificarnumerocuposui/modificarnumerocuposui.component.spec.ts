import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnumerocuposuiComponent } from './modificarnumerocuposui.component';

describe('ModificarnumerocuposuiComponent', () => {
  let component: ModificarnumerocuposuiComponent;
  let fixture: ComponentFixture<ModificarnumerocuposuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnumerocuposuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnumerocuposuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
