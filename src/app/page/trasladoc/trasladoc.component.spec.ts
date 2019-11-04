import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasladocComponent } from './trasladoc.component';

describe('TrasladocComponent', () => {
  let component: TrasladocComponent;
  let fixture: ComponentFixture<TrasladocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasladocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasladocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
