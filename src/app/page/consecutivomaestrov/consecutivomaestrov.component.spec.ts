import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecutivomaestrovComponent } from './consecutivomaestrov.component';

describe('ConsecutivomaestrovComponent', () => {
  let component: ConsecutivomaestrovComponent;
  let fixture: ComponentFixture<ConsecutivomaestrovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsecutivomaestrovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecutivomaestrovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
