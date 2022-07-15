import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPostComplainComponent } from './team-post-complain.component';

describe('TeamPostComplainComponent', () => {
  let component: TeamPostComplainComponent;
  let fixture: ComponentFixture<TeamPostComplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPostComplainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPostComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
