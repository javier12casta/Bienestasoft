import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenuComponent } from './almacenu.component';

describe('AlmacenuComponent', () => {
  let component: AlmacenuComponent;
  let fixture: ComponentFixture<AlmacenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
