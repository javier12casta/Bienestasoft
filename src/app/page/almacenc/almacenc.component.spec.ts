import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacencComponent } from './almacenc.component';

describe('AlmacencComponent', () => {
  let component: AlmacencComponent;
  let fixture: ComponentFixture<AlmacencComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacencComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
