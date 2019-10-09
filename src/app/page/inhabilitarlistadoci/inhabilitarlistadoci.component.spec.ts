import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabilitarlistadociComponent } from './inhabilitarlistadoci.component';

describe('InhabilitarlistadociComponent', () => {
  let component: InhabilitarlistadociComponent;
  let fixture: ComponentFixture<InhabilitarlistadociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabilitarlistadociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabilitarlistadociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
