import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolmComponent } from './rolm.component';

describe('RolmComponent', () => {
  let component: RolmComponent;
  let fixture: ComponentFixture<RolmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
