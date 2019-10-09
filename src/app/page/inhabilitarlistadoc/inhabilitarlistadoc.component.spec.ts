import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarlistadocComponent } from './inhabilitarlistadoc.component';

describe('InhabilitarlistadocComponent', () => {
  let component: InhabilitarlistadocComponent;
  let fixture: ComponentFixture<InhabilitarlistadocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarlistadocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarlistadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
