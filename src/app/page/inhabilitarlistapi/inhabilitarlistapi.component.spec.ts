import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarlistapiComponent } from './inhabilitarlistapi.component';

describe('InhabilitarlistapiComponent', () => {
  let component: InhabilitarlistapiComponent;
  let fixture: ComponentFixture<InhabilitarlistapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarlistapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarlistapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
