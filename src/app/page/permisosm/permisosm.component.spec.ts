import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosmComponent } from './permisosm.component';

describe('PermisosmComponent', () => {
  let component: PermisosmComponent;
  let fixture: ComponentFixture<PermisosmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisosmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermisosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
