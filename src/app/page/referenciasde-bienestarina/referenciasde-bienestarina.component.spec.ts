import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasdeBienestarinaComponent } from './referenciasde-bienestarina.component';

describe('ReferenciasdeBienestarinaComponent', () => {
  let component: ReferenciasdeBienestarinaComponent;
  let fixture: ComponentFixture<ReferenciasdeBienestarinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciasdeBienestarinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasdeBienestarinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
