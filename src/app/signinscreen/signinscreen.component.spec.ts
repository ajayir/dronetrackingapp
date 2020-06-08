import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninscreenComponent } from './signinscreen.component';

describe('SigninscreenComponent', () => {
  let component: SigninscreenComponent;
  let fixture: ComponentFixture<SigninscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
