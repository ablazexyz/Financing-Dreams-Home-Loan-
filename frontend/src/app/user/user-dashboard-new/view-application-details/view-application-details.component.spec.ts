import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationDetailsComponent } from './view-application-details.component';

describe('ViewApplicationDetailsComponent', () => {
  let component: ViewApplicationDetailsComponent;
  let fixture: ComponentFixture<ViewApplicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewApplicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
