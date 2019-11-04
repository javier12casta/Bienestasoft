import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariocComponent } from './inventarioc.component';

describe('InventariocComponent', () => {
  let component: InventariocComponent;
  let fixture: ComponentFixture<InventariocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
