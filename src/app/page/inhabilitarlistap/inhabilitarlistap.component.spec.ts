import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarlistapComponent } from './inhabilitarlistap.component';

describe('InhabilitarlistapComponent', () => {
  let component: InhabilitarlistapComponent;
  let fixture: ComponentFixture<InhabilitarlistapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarlistapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarlistapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
