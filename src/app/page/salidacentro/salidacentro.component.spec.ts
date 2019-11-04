import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidacentroComponent } from './salidacentro.component';

describe('SalidacentroComponent', () => {
  let component: SalidacentroComponent;
  let fixture: ComponentFixture<SalidacentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidacentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidacentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
