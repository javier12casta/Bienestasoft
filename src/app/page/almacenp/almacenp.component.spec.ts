import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenpComponent } from './almacenp.component';

describe('AlmacenpComponent', () => {
  let component: AlmacenpComponent;
  let fixture: ComponentFixture<AlmacenpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
