import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuentoinventarioComponent } from './recuentoinventario.component';

describe('RecuentoinventarioComponent', () => {
  let component: RecuentoinventarioComponent;
  let fixture: ComponentFixture<RecuentoinventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuentoinventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuentoinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
