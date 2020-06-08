import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdronesComponent } from './registerdrones.component';

describe('RegisterdronesComponent', () => {
  let component: RegisterdronesComponent;
  let fixture: ComponentFixture<RegisterdronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
