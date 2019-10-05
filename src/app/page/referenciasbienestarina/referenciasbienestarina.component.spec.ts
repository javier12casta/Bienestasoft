import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasbienestarinaComponent } from './referenciasbienestarina.component';

describe('ReferenciasbienestarinaComponent', () => {
  let component: ReferenciasbienestarinaComponent;
  let fixture: ComponentFixture<ReferenciasbienestarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciasbienestarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasbienestarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
