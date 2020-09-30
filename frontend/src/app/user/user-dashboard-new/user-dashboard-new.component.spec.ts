import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardNewComponent } from './user-dashboard-new.component';

describe('UserDashboardNewComponent', () => {
  let component: UserDashboardNewComponent;
  let fixture: ComponentFixture<UserDashboardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
