import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSwipperComponent } from './profile-swipper.component';

describe('ProfileSwipperComponent', () => {
  let component: ProfileSwipperComponent;
  let fixture: ComponentFixture<ProfileSwipperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSwipperComponent]
    });
    fixture = TestBed.createComponent(ProfileSwipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
