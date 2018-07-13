import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCoverComponent } from './spinner-cover.component';

describe('SpinnerCoverComponent', () => {
  let component: SpinnerCoverComponent;
  let fixture: ComponentFixture<SpinnerCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
