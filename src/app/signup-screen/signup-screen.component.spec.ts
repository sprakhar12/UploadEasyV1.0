import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupScreenComponent } from './signup-screen.component';

describe('SignupScreenComponent', () => {
  let component: SignupScreenComponent;
  let fixture: ComponentFixture<SignupScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
