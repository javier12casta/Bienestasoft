import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarnivelnumerocuposComponent } from './modificarnivelnumerocupos.component';

describe('ModificarnivelnumerocuposComponent', () => {
  let component: ModificarnivelnumerocuposComponent;
  let fixture: ComponentFixture<ModificarnivelnumerocuposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarnivelnumerocuposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarnivelnumerocuposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
