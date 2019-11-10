import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuentoinventariocComponent } from './recuentoinventarioc.component';

describe('RecuentoinventariocComponent', () => {
  let component: RecuentoinventariocComponent;
  let fixture: ComponentFixture<RecuentoinventariocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuentoinventariocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuentoinventariocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
