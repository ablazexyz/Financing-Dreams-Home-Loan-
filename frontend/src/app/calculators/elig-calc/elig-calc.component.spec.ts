import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligCalcComponent } from './elig-calc.component';

describe('EligCalcComponent', () => {
  let component: EligCalcComponent;
  let fixture: ComponentFixture<EligCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
