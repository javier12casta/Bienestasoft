import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunaliComponent } from './comunali.component';

describe('ComunaliComponent', () => {
  let component: ComunaliComponent;
  let fixture: ComponentFixture<ComunaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
