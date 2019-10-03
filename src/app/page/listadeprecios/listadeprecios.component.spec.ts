import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepreciosComponent } from './listadeprecios.component';

describe('ListadepreciosComponent', () => {
  let component: ListadepreciosComponent;
  let fixture: ComponentFixture<ListadepreciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadepreciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadepreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
