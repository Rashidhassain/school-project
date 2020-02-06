import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fees1Component } from './fees1.component';

describe('Fees1Component', () => {
  let component: Fees1Component;
  let fixture: ComponentFixture<Fees1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fees1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fees1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
