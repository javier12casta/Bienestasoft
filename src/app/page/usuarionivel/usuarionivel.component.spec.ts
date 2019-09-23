import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarionivelComponent } from './usuarionivel.component';

describe('UsuarionivelComponent', () => {
  let component: UsuarionivelComponent;
  let fixture: ComponentFixture<UsuarionivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarionivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarionivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
