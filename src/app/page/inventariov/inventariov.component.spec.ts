import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariovComponent } from './inventariov.component';

describe('InventariovComponent', () => {
  let component: InventariovComponent;
  let fixture: ComponentFixture<InventariovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
