import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodistribucionpComponent } from './centrodistribucionp.component';

describe('CentrodistribucionpComponent', () => {
  let component: CentrodistribucionpComponent;
  let fixture: ComponentFixture<CentrodistribucionpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrodistribucionpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrodistribucionpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
