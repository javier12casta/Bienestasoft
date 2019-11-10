import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolinhComponent } from './rolinh.component';

describe('RolinhComponent', () => {
  let component: RolinhComponent;
  let fixture: ComponentFixture<RolinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
