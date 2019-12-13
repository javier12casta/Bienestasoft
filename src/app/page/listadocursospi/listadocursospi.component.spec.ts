import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocursospiComponent } from './listadocursospi.component';

describe('ListadocursospiComponent', () => {
  let component: ListadocursospiComponent;
  let fixture: ComponentFixture<ListadocursospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocursospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocursospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
