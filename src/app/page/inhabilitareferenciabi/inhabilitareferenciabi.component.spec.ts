import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitareferenciabiComponent } from './inhabilitareferenciabi.component';

describe('InhabilitareferenciabiComponent', () => {
  let component: InhabilitareferenciabiComponent;
  let fixture: ComponentFixture<InhabilitareferenciabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitareferenciabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitareferenciabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
