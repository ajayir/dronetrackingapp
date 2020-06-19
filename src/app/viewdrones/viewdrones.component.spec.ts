import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdronesComponent } from './viewdrones.component';

describe('ViewdronesComponent', () => {
  let component: ViewdronesComponent;
  let fixture: ComponentFixture<ViewdronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
