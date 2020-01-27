import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropSpinnerComponent } from './backdrop-spinner.component';

describe('BackdropSpinnerComponent', () => {
  let component: BackdropSpinnerComponent;
  let fixture: ComponentFixture<BackdropSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
