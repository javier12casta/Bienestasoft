import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosvComponent } from './usuariosv.component';

describe('UsuariosvComponent', () => {
  let component: UsuariosvComponent;
  let fixture: ComponentFixture<UsuariosvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
