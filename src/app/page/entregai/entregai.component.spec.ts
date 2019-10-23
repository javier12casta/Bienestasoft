import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaiComponent } from './entregai.component';

describe('EntregaiComponent', () => {
  let component: EntregaiComponent;
  let fixture: ComponentFixture<EntregaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
