import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcioninvComponent } from './recepcioninv.component';

describe('RecepcioninvComponent', () => {
  let component: RecepcioninvComponent;
  let fixture: ComponentFixture<RecepcioninvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcioninvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcioninvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
