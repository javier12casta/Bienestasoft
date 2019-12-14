import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocursospComponent } from './listadocursosp.component';

describe('ListadocursospComponent', () => {
  let component: ListadocursospComponent;
  let fixture: ComponentFixture<ListadocursospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocursospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocursospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
