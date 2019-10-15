import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribucionComponent } from './centrodistribucion.component';

describe('CentrodistribucionComponent', () => {
  let component: CentrodistribucionComponent;
  let fixture: ComponentFixture<CentrodistribucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
