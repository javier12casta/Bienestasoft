import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaselComponent } from './entregasel.component';

describe('EntregaselComponent', () => {
  let component: EntregaselComponent;
  let fixture: ComponentFixture<EntregaselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
