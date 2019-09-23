import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarusuariosComponent } from './inhabilitarusuarios.component';

describe('InhabilitarusuariosComponent', () => {
  let component: InhabilitarusuariosComponent;
  let fixture: ComponentFixture<InhabilitarusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
