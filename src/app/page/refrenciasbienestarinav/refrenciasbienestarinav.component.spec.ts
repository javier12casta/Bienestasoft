import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrenciasbienestarinavComponent } from './refrenciasbienestarinav.component';

describe('RefrenciasbienestarinavComponent', () => {
  let component: RefrenciasbienestarinavComponent;
  let fixture: ComponentFixture<RefrenciasbienestarinavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrenciasbienestarinavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrenciasbienestarinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
