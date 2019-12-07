import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenuiComponent } from './almacenui.component';

describe('AlmacenuiComponent', () => {
  let component: AlmacenuiComponent;
  let fixture: ComponentFixture<AlmacenuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
