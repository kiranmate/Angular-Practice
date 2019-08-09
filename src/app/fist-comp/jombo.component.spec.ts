import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JomboComponent } from './jombo.component';

describe('JomboComponent', () => {
  let component: JomboComponent;
  let fixture: ComponentFixture<JomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
