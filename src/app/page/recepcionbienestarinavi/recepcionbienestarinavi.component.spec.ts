import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionbienestarinaviComponent } from './recepcionbienestarinavi.component';

describe('RecepcionbienestarinaviComponent', () => {
  let component: RecepcionbienestarinaviComponent;
  let fixture: ComponentFixture<RecepcionbienestarinaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionbienestarinaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionbienestarinaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
