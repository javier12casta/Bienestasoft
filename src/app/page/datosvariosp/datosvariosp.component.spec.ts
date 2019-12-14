import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosvariospComponent } from './datosvariosp.component';

describe('DatosvariospComponent', () => {
  let component: DatosvariospComponent;
  let fixture: ComponentFixture<DatosvariospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosvariospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosvariospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
