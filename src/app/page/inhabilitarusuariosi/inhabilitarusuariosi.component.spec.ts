import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarusuariosiComponent } from './inhabilitarusuariosi.component';

describe('InhabilitarusuariosiComponent', () => {
  let component: InhabilitarusuariosiComponent;
  let fixture: ComponentFixture<InhabilitarusuariosiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarusuariosiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarusuariosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
