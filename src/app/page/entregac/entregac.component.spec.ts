import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregacComponent } from './entregac.component';

describe('EntregacComponent', () => {
  let component: EntregacComponent;
  let fixture: ComponentFixture<EntregacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
