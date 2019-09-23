import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioyrolesComponent } from './usuarioyroles.component';

describe('UsuarioyrolesComponent', () => {
  let component: UsuarioyrolesComponent;
  let fixture: ComponentFixture<UsuarioyrolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioyrolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioyrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
