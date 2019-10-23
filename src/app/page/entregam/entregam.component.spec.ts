import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregamComponent } from './entregam.component';

describe('EntregamComponent', () => {
  let component: EntregamComponent;
  let fixture: ComponentFixture<EntregamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
