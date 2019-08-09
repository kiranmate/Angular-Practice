import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCompComV1Component } from './int-comp-com-v1.component';

describe('IntCompComV1Component', () => {
  let component: IntCompComV1Component;
  let fixture: ComponentFixture<IntCompComV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCompComV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCompComV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
