import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportecentrozonalComponent } from './reportecentrozonal.component';

describe('ReportecentrozonalComponent', () => {
  let component: ReportecentrozonalComponent;
  let fixture: ComponentFixture<ReportecentrozonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportecentrozonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportecentrozonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
