import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlistadocursospiComponent } from './ilistadocursospi.component';

describe('IlistadocursospiComponent', () => {
  let component: IlistadocursospiComponent;
  let fixture: ComponentFixture<IlistadocursospiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlistadocursospiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlistadocursospiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
