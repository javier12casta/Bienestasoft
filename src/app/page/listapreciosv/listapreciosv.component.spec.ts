import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapreciosvComponent } from './listapreciosv.component';

describe('ListapreciosvComponent', () => {
  let component: ListapreciosvComponent;
  let fixture: ComponentFixture<ListapreciosvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapreciosvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapreciosvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
