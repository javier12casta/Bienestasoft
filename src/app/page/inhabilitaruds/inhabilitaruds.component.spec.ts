import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarudsComponent } from './inhabilitaruds.component';

describe('InhabilitarudsComponent', () => {
  let component: InhabilitarudsComponent;
  let fixture: ComponentFixture<InhabilitarudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
