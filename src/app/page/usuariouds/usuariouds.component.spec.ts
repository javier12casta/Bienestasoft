import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioudsComponent } from './usuariouds.component';

describe('UsuarioudsComponent', () => {
  let component: UsuarioudsComponent;
  let fixture: ComponentFixture<UsuarioudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
