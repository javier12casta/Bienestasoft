import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsinhComponent } from './udsinh.component';

describe('UdsinhComponent', () => {
  let component: UdsinhComponent;
  let fixture: ComponentFixture<UdsinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
