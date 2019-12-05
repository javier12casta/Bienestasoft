import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolvComponent } from './rolv.component';

describe('RolvComponent', () => {
  let component: RolvComponent;
  let fixture: ComponentFixture<RolvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
