import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalcComponent } from './emi-calc.component';

describe('EmiCalcComponent', () => {
  let component: EmiCalcComponent;
  let fixture: ComponentFixture<EmiCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
