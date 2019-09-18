import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioliComponent } from './barrioli.component';

describe('BarrioliComponent', () => {
  let component: BarrioliComponent;
  let fixture: ComponentFixture<BarrioliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrioliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
