import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarusuariospComponent } from './inhabilitarusuariosp.component';

describe('InhabilitarusuariospComponent', () => {
  let component: InhabilitarusuariospComponent;
  let fixture: ComponentFixture<InhabilitarusuariospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarusuariospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarusuariospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
