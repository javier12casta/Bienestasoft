import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionbienestrarinaComponent } from './recepcionbienestrarina.component';

describe('RecepcionbienestrarinaComponent', () => {
  let component: RecepcionbienestrarinaComponent;
  let fixture: ComponentFixture<RecepcionbienestrarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionbienestrarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionbienestrarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
