import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionbienestarinavComponent } from './recepcionbienestarinav.component';

describe('RecepcionbienestarinavComponent', () => {
  let component: RecepcionbienestarinavComponent;
  let fixture: ComponentFixture<RecepcionbienestarinavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionbienestarinavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionbienestarinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
