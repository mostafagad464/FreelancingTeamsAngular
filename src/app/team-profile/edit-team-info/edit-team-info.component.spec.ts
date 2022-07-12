import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamInfoComponent } from './edit-team-info.component';

describe('EditTeamInfoComponent', () => {
  let component: EditTeamInfoComponent;
  let fixture: ComponentFixture<EditTeamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeamInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
