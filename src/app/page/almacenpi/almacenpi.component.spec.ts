import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenpiComponent } from './almacenpi.component';

describe('AlmacenpiComponent', () => {
  let component: AlmacenpiComponent;
  let fixture: ComponentFixture<AlmacenpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
