import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvariosuComponent } from './datosvariosu.component';

describe('DatosvariosuComponent', () => {
  let component: DatosvariosuComponent;
  let fixture: ComponentFixture<DatosvariosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosvariosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvariosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
