import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAlertComponent } from './cust-alert.component';

describe('CustAlertComponent', () => {
  let component: CustAlertComponent;
  let fixture: ComponentFixture<CustAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
