import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarusuariosuComponent } from './inhabilitarusuariosu.component';

describe('InhabilitarusuariosuComponent', () => {
  let component: InhabilitarusuariosuComponent;
  let fixture: ComponentFixture<InhabilitarusuariosuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarusuariosuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarusuariosuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
