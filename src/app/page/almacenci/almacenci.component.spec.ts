import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenciComponent } from './almacenci.component';

describe('AlmacenciComponent', () => {
  let component: AlmacenciComponent;
  let fixture: ComponentFixture<AlmacenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
