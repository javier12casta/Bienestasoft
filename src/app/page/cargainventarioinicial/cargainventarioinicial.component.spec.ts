import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargainventarioinicialComponent } from './cargainventarioinicial.component';

describe('CargainventarioinicialComponent', () => {
  let component: CargainventarioinicialComponent;
  let fixture: ComponentFixture<CargainventarioinicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargainventarioinicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargainventarioinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
