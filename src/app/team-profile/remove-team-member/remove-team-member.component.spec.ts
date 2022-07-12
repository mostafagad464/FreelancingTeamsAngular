import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTeamMemberComponent } from './remove-team-member.component';

describe('RemoveTeamMemberComponent', () => {
  let component: RemoveTeamMemberComponent;
  let fixture: ComponentFixture<RemoveTeamMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTeamMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
