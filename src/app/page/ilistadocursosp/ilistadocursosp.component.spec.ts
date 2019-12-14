import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlistadocursospComponent } from './ilistadocursosp.component';

describe('IlistadocursospComponent', () => {
  let component: IlistadocursospComponent;
  let fixture: ComponentFixture<IlistadocursospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlistadocursospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlistadocursospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
