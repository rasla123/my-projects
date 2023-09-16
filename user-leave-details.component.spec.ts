import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeaveDetailsComponent } from './user-leave-details.component';

describe('UserLeaveDetailsComponent', () => {
  let component: UserLeaveDetailsComponent;
  let fixture: ComponentFixture<UserLeaveDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLeaveDetailsComponent]
    });
    fixture = TestBed.createComponent(UserLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
